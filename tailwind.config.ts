import flowbite from 'flowbite-react/tailwind';
import path from 'path';
import type { Config } from 'tailwindcss';

const flowbiteContent = path.dirname(require.resolve('flowbite-react/tailwind'));

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
    extend: {
      boxShadow: {
        bottom: '0 6px 13px 0px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
};

export default config;
