import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:{
          10:"#FFFFFF", // text
          30:"#B3B3B3", // secondary text
          50:"#404040", // top gradient
          60:"#282828", // bottom gradient
          70:"#181818", // menu bar
          80:"#121212", // background
          90:"#000000" // black
        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          30: '#00B4D8',
        },
        yellow: {
          50: '#FEC601',
        },
        primary:{
          10:"#DFCCC2",
          20:"#C2B8CC",
          30:"#C5CEBD",
        }
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
}
export default config
