import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",

        foreground: "var(--foreground)",
        'blue': {
          950: '#090842'
        },
        'gray': {
          100: '#E1E1E1',
          300: '#F5F5F5',
          500: '#959595'
        },
        'yellow': {
          300: '#FFEA00'
        },
        'green': {
          500: '#75B843',
          900: '#034C38'
        },
        'amber': {
          400: '#F3B64B',
          500: '#E5970E'
        },
        'Pink': {
          500: '#FF00AA'
        },
        'Purple': {
          600: '#FF00AA'
        },
      },
      
    },
  },
  plugins: [],
};

export default config;