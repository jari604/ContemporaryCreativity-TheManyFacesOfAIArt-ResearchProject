/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
  ],
  extend: {
    display: ['group-hover'],
  },
  theme: {
    fontFamily: {
      body: [
        'Roboto Slab',
        'ui-sans-serif',
        'system-ui',
      ],
      sans: [
        'Roboto Slab',
        'ui-sans-serif',
        'system-ui',
      ],
    },
    extend: {
      boxShadow: {
        bottom: '0 6px 13px 0px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        TUcyan: '#00A6D6',
        TUblack: '#000000',
        TUwhite: '#FFFFFF',
        TUdarkblue: '#0C2340',
        TUturquoise: '#00B8C8',
        TUblue: '#0076C2',
        TUpurple: '#6F1D77',
        TUpink: '#EF60A3',
        TUraspberry: '#A50034',
        TUred: '#E03C31',
        TUorange: '#EC6842',
        TUyellow: '#FFB81C',
        TUlightgreen: '#6CC24A',
        TUdarkgreen: '#009B77',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
