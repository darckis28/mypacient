/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#26C5CE',
        colorSecundary: '#8d77f4'
      },
      backgroundImage: {
        gradientApp: 'linear-gradient(90deg, rgba(84,115,221,1) 0%, rgba(68,138,224,1) 100%)', gradientMan: 'linear-gradient(90deg, rgba(67,20,94,1) 0%, rgba(156,14,237,1) 100%)',
        gradientFem: 'linear-gradient(90deg, rgba(115,18,101,1) 0%, rgba(237,14,206,1) 100%)'
      },
      fontFamily: { montserrat: 'montserrat' },
    },
  },
  plugins: [],
}

