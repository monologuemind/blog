import ButtonWCount from '$components/markdown/Button.svelte';
import FeaturedButton from '$components/markdown/FeaturedButton.svelte'
import Define from '$components/markdown/Define.svelte';
import Select from '$components/markdown/Select.svelte';
import type { SvelteComponent } from 'svelte';
import Run from '$components/markdown/Run.svelte';

const get_start_regex = (selector: string) => {
	return new RegExp(`%${selector}`);
};

const get_full_regex = (selector: string) => {
	return new RegExp(`^%${selector} (.*)`);
};

const create_tokenizer = ({
	level,
	selector,
	component,
	sample_text
}: {
	level: 'block' | 'inline';
	selector: string;
	component: Partial<SvelteComponent>;
	sample_text: string;
}) => {
	return {
		[selector]: {
			tokenizer: {
				name: selector,
				level,
				start(src: string) {
					return src.match(get_start_regex(selector))?.index;
				},
				tokenizer(src: string) {
					const rule = get_full_regex(selector);
					const match = rule.exec(src);
					if (match) {
						return {
							type: selector,
							raw: match[0],
							text: match[1]
						};
					}
				}
			},
			renderer: component,
			sample_text,
		}
	};
};

export const custom_marked_config = {
	...create_tokenizer({
		selector: 'button',
		level: 'block',
		component: ButtonWCount,
		sample_text: '%button Here is a button'
	}),
	...create_tokenizer({
		selector: 'select',
		level: 'block',
		component: Select,
		sample_text: '%select Default Value -> Opt1, Opt2, Opt3'
	}),
	...create_tokenizer({
		selector: 'define',
		level: 'block',
		component: Define,
		sample_text: '%define num::number::1'
	}),
	...create_tokenizer({
		selector: 'fbutton',
		level: 'block',
		component: FeaturedButton,
		sample_text: '%define fun::function::console.log(1)\n%define text::string::"Sup"\n%fbutton %variable("text") %function("fun")'
	}),
	...create_tokenizer({
		selector: 'run',
		level: 'block',
		component: Run,
		sample_text: '%run console.log("Hello World!")'
	})
};

export default custom_marked_config;
