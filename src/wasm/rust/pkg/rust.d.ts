/* tslint:disable */
/* eslint-disable */
/**
* @param {any} to_log
*/
export function js_log(to_log: any): void;
/**
* @returns {any}
*/
export function hello_world(): any;
/**
* @param {any} v
* @returns {any}
*/
export function unique_by(v: any): any;
/**
* @returns {any}
*/
export function get_instance_of_person(): any;
/**
* @param {any} js_person
* @returns {any}
*/
export function create_person(js_person: any): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly js_log: (a: number) => void;
  readonly hello_world: () => number;
  readonly unique_by: (a: number) => number;
  readonly get_instance_of_person: () => number;
  readonly create_person: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
