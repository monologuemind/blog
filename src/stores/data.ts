import { writable, get, type Writable } from 'svelte/store';

const store: Writable<Data> = writable({});

export default {
	...store,
	value() {
		return get(store);
	}
};
