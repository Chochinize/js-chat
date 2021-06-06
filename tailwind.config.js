module.exports = {
  purge: ['./componens/*.js', './public/styles.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {   
      cursor: ['hover', 'focus'], 
      colors:{
        primary: 'black'
      },
      fontFamily: {
        ani: ['Annie Use Your Telescope','cursive',],
        indie: ['Indie Flower','cursive',]
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
 