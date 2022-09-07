import Custom from "$components/Custom.svelte";
import type { marked } from "marked";
import type { SvelteComponent } from "svelte";

const get_start_regex = (selector: string) => {
  return new RegExp(`%${selector}`);
}

const get_full_regex = (selector: string) => {
  return new RegExp(`^%${selector} (.*)`);
}

const create_tokenizer = ({
  level,
  selector,
  component
}: {
  level: 'block' | 'inline';
  selector: string;
  component: Partial<SvelteComponent>;
}) => {
  return {
    [selector]: {
      tokenizer: {
        name: selector,
        level,
        start(src: string) {
          return src.match(get_start_regex(selector))?.index
        },
        tokenizer(src: string) {
          const rule = get_full_regex(selector);
          const match = rule.exec(src);
          if (match) {
            return {
              type: selector,
              raw: match[0],
              text: match[1]
            }
          }
        }
      },
      renderer: component,
    }
  };
}

export const what = {
  ...create_tokenizer({
    selector: 'button',
    level: 'block',
    component: Custom,
  })
};

export default what