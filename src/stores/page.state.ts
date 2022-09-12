import { get, writable, type Writable } from "svelte/store";

export type PageWritable = Writable<{
  [key: string]: Record<string, any>
}>

const store: PageWritable = writable({});

export default {
  ...store,
  value() {
    return get(store)
  }
}