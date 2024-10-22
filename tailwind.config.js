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
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors:{
        'blog1':'#ff0048 ',
        'blog2':'#ff3870',
        'blog3':'#c300c3',
        'work':'#e60072',
        'text-blog':'#6a6a8e',
        'static':'#f5f5f5',
        'work-card':'#050748',
        'mission':'#e2f3ff',
        'vision':'#fffbef',
        'describe':'rgb(247, 252, 255)',
        'describe-br':'rgb(212, 240, 255)',
        'button1':'#fc00c7',
        'button2':'#1c4efd',
        'button3':'#00aded',
        'case':'#109cd8'
      },
      borderRadius:{
        "md":'50px'
      },
     
      
      boxShadow: {
        '3xl': '-10px 12px 25px -4px rgba(0, 0, 0, 0.24)',
        'offset-xl': '-20px 20px 35px #dcdcdc',
        'inner-xl': '20px -40px 35px #fff',
      
      },
      extend: {
      backgroundImage:{
        "workCategory":"url(/public/assets/Work-categoy/tt-work-bg.jpg)"
      },
      fontSize:{
        xl:'22px',
        lg:'17px',
        '4xl':'40px',
        
        
        
      },
      

    },
  }
  },  
  plugins: [],
}
