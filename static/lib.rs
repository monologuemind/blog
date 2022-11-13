use serde::{Deserialize, Serialize};
use serde_json::Value;
use serde_wasm_bindgen::{from_value, to_value};
use std::collections::HashMap;
use wasm_bindgen::prelude::{wasm_bindgen, JsValue};

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_bool(b: bool);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_int(i: i64);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_jsvalue(s: JsValue);
}

#[wasm_bindgen]
pub fn js_log(to_log: JsValue) {
    log_jsvalue(to_log);
}

#[wasm_bindgen]
pub fn hello_world() -> JsValue {
    return JsValue::from_str(&("Hello World"));
}

#[wasm_bindgen]
pub fn unique_by(v: JsValue) -> JsValue {
    let value: serde_json::Value = from_value(v).unwrap();

    if !value.is_object() {
        log("value isn't an object");
        return to_value(&value).unwrap();
    }

    let object_value = value.as_object().unwrap();

    if !object_value.contains_key("key") {
        log("\"key\" doesn't exist on object");
        return to_value(&value).unwrap();
    }

    let key = object_value.get("key").unwrap();

    if !key.is_string() {
        log("value isn't an object");
        return to_value(&value).unwrap();
    }

    let objects = value.get("objects").unwrap();
    let to_key_by = key.as_str().unwrap();

    if !objects.is_array() {
        log("objects isn't an array");
        return to_value(&value).unwrap();
    }

    let object_array = objects.as_array().unwrap().to_vec();
    let mut map = HashMap::new();

    for index in 0..object_array.len() {
        if !object_array[index].to_owned().is_object() {
            log(&format!("index {} isn't an object", index));
            continue;
        }
        if object_array[index].to_owned().is_object() {
            let object_as_object = object_array[index].as_object().unwrap();

            let key_exits = object_as_object.contains_key(to_key_by);

            if key_exits {
                let target_key_value = object_as_object.get(to_key_by).unwrap().clone();

                if !target_key_value.is_string() {
                    log(&format!("{} value isn't an string.", to_key_by));
                    continue;
                }

                let target_key_string = target_key_value.to_string();
                if target_key_value.is_string() && !map.contains_key(&target_key_string) {
                    map.insert(target_key_string, object_as_object);
                }
            }
        }
    }

    // HashMap to Vec
    let map_values: Vec<&serde_json::Map<String, Value>> = map.values().cloned().collect();

    return to_value(&map_values).unwrap();
}

#[derive(Serialize, Deserialize)]
struct Person {
    name: String,
    age: i64,
    _meta: String,
}

#[wasm_bindgen]
pub fn get_instance_of_person() -> JsValue {
    let person = Person {
        name: "MonologueMind".to_owned(),
        age: 100,
        _meta: "No meta data here".to_owned(),
    };

    return to_value(&person).unwrap();
}

#[wasm_bindgen]
pub fn create_person(js_person: JsValue) -> JsValue {
    let rust_person: serde_json::Value = from_value(js_person).unwrap();

    if rust_person.is_object() {
        let rust_person_object = rust_person.as_object().unwrap();

        if rust_person_object.contains_key("name") && rust_person_object.contains_key("age") {
            let name = rust_person_object.get("name").unwrap();
            let age = rust_person_object.get("age").unwrap();

            if name.is_string() && age.is_number() {
                let this_person = Person {
                    name: name.as_str().unwrap().to_string(),
                    age: age.as_i64().unwrap(),
                    _meta: "No meta data here.".to_owned(),
                };

                return to_value(&this_person).unwrap();
            }
        }
    }

    return get_instance_of_person();
}
