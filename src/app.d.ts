/// <reference types="mdsvex/globals" />
// Alt option for the above
// declare module "*.svx" {
// 	export { SvelteComponentDev as default } from "svelte/internal";
// }

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}
declare interface Window {
	opera?: any;
	page_state: import('svelte/store').Writable<{
		[key: string]: Record<string, any>
	}>;
}

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

type ArrayElement<ArrType> = ArrType extends readonly (infer ElementType)[] ? ElementType : never;

type Fetch = ArgumentTypes<import('@sveltejs/kit').Load>['0']['fetch'];

type MarkedExtension = ArrayElement<
	ArgumentTypes<typeof import('marked').marked.use>['0']['extensions']
>;

type Article = { name: string; pathname: string; description: string; topics: string[] };

type Data = { articles?: Article[] };
