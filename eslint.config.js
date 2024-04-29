import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		plugins: {
			'@stylistic': stylistic,
		},
	},
];
