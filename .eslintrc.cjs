module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react', '@typescript-eslint', 'react-refresh'],
	rules: {
		indent: 'off',
		'linebreak-style': [0, 'error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/react-in-jsx-scope': 'off',
		'react/no-unused-prop-types': [1],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
