const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		theme: true,
		darkTheme: "dark",
	},

	plugins: [daisyui]
};

module.exports = config;
