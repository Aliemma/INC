/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
       colors: {
      'green': " #289b26;",
      "light-blue": "rgb(63,180,249)",
      'black': "rgb(17,25,40)",
      "light-black": "rgb(16,23,42)",
      
    
    },

    fontSize: {
      'xl': "15px",
      "2xl": "22px",
      "3xl": "28px",
      "4xl": "38px",
      "5xl": "2.6rem",
      "6xl": "3.6rem",
      "7xl": "12px",
    },
    screens: {
     
      'md': { 'max': "767px" },
      'sm': { 'max': "600px" },
    },
    extend: {},
  },
  plugins: [],
}