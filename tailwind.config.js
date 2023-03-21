/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blog1':'#ff0048 ',
        'blog2':'#ff3870',
        'blog3':'#c300c3',
        'text-blog':'#6a6a8e',
        'static':'#f5f5f5'
      },
      borderRadius:{
        "md":'50px'
      }

    },
  },  
  plugins: [],
}
