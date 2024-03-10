import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-dm-sans)'],
        mono: ['var(--font-roboto-mono)']
      },
      colors:{
        //Primary
        'primary-50':  '#F3F3F4',
        'primary-100': '#DCDDDF',
        'primary-200': '#C6C6C9',
        'primary-300': '#AFB0B4',
        'primary-400': '#9A9BA0',
        'primary-500': '#85868B',
        'primary-600': '#717277',
        'primary-700': '#5D5E63',
        'primary-800': '#4A4B4F',
        'primary-900': '#38393C',
        'primary':'#25262A',

        //Secundary
        'secundary-50': '#E7F7F4',
        'secundary-100': '#B8E6DD',
        'secundary-200': '#88D5C7',
        'secundary-300': '#56C2B1',
        'secundary-400': '#09AE9C',
        'secundary-500': '#009A87',
        'secundary-600': '#008573',
        'secundary-700': '#006F5F',
        'secundary-800': '#00594C',
        'secundary-900': '#00443A',
        'secundary': '#2DD4BF',

        //Tertiary
        'tertiary-50': '#F3F3F4',
        'tertiary-100': '#DCDDDF',
        'tertiary-200': '#C6C6C9',
        'tertiary-300': '#AFB0B4',
        'tertiary-400': '#9A9B9F',
        'tertiary-500': '#85868B',
        'tertiary-600': '#717276',
        'tertiary-700': '#5D5E62',
        'tertiary-800': '#4A4B4F',
        'tertiary-900': '#38393C',
        'tertiary': '#2D2E32',
      }
    },
  },
  plugins: [
   
  ],
};
export default config;
