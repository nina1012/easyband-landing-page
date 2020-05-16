module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        xl: '1440px'
      },
      colors: {
        // primary
        'dark-blue': 'hsl(233,26%,24%)',
        'lime-green': 'hsl(136,65%,51%)',
        'bright-cyan': 'hsl(192,70%,51%)',
        //neutral

        'grayish-blue': 'hsl(233,8%,62%)',
        'light-grayish-blue': 'hsl(230,16%,96%)',
        'very-light-blue': 'hsl(0,0%,98%)',
        white: 'hsl(0,0%,100%)'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
