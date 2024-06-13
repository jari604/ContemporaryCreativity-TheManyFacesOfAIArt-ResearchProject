/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 120,
  arrowParens: 'always',
  // tailwindcss
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['twMerge', 'createTheme'],
};
