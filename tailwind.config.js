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
        'work':'#e60072',
        'text-blog':'#6a6a8e',
        'static':'#f5f5f5',
        'work-card':'#050748'
      },
      borderRadius:{
        "md":'50px'
      },
      
      extend: {
      backgroundImage:{
        "workCategory":"url(/public/assets/Work-categoy/tt-work-bg.jpg)"
      }

    },
  }
  },  
  plugins: [],
}
