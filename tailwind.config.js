/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'inner-about': "url('/src/app/assets/inner-pagebg.jpg')",
        
      // },
      screens: {
        'xs':"320px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
    
  
        'xl': '1280px',
      
      },
      fontFamily:{
        'nunito':['Nunito Sans', "sans-serif"],
        'Inter': ['Inter', 'sans-serif'],
        'Outfit': [ 'Outfit', "sans-serif"]
      },
      
      colors: {
        'primary-color': "#1ECB15",
        'secondary-color': "#179510",
        'blue-text': "#031B4E",
        'black-bg': "#121212",
        'gray-text': "#cccccc",
        'text-black': "#333333",
        'border-color': "#031b4e80"
        
      },
     

    },
  },
  plugins: [],
}
