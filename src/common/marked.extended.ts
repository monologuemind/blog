import ButtonWCount from '$components/ButtonWCount.svelte';
import Select from '$components/Select.svelte';
import type { SvelteComponent } from 'svelte';

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
	})
};

export default custom_marked_config;
