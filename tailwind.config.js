module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        //primary: '#14b8a6',
        dark:'#0f172a',
        secondary: '#64748b',
      },
      screen:{
        '2xl':'1320px',
      },
    },
    plugins: [],
  }
}
