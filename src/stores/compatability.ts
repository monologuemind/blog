import { get, writable, type Writable } from 'svelte/store';

export type CompatabilityStore = Writable<{
  is_mobile?: boolean;
}>;

const store: CompatabilityStore = writable({});

export default {
  ...store,
  value() {
    return get(store);
  }
}