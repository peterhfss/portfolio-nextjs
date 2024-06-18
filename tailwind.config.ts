import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary01: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};
export default config;
