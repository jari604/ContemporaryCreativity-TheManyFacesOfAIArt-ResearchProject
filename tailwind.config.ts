import flowbite from 'flowbite-react/tailwind';
import path from 'path';
import type { Config } from 'tailwindcss';

const flowbiteContent = path.dirname(require.resolve('flowbite-react/tailwind'));

const TUDelftColors = {
  'TU-cyan': '#00A6D6',
  'TU-black': '#000000',
  'TU-white': '#FFFFFF',
  'TU-dark-blue': '#0C2340',
  'TU-turquoise': '#00B8C8',
  'TU-blue': '#0076C2',
  'TU-purple': '#6F1D77',
  'TU-pink': '#EF60A3',
  'TU-raspberry': '#A50034',
  'TU-red': '#E03C31',
  'TU-orange': '#EC6842',
  'TU-yellow': '#FFB81C',
  'TU-light-green': '#6CC24A',
  'TU-dark-green': '#009B77',
};

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    `${flowbiteContent}/**/*.{js,ts,jsx,tsx,cjs}`,
  ],
  plugins: [flowbite.plugin()],
  extend: {
    display: ['group-hover'],
  },
  theme: {
    // colors: {
    //   inherit: 'inherit',
    //   current: 'currentColor',
    //   transparent: 'transparent',
    //   cyan: TUDelftColors['TU-cyan'],
    //   black: TUDelftColors['TU-black'],
    //   white: TUDelftColors['TU-white'],
    //   gray: colors.gray,
    //   red: TUDelftColors['TU-red'],
    //   orange: TUDelftColors['TU-orange'],
    //   yellow: TUDelftColors['TU-yellow'],
    //   green: TUDelftColors['TU-light-green'],
    //   teal: TUDelftColors['TU-turquoise'],
    //   blue: TUDelftColors['TU-blue'],
    //   indigo: TUDelftColors['TU-raspberry'],
    //   purple: TUDelftColors['TU-purple'],
    //   pink: TUDelftColors['TU-pink'],
    // },
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
};

export default config;
