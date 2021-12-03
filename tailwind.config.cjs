module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  // more options here
  plugins: [
      require('daisyui'),
    ]
,
  daisyui: {
    themes: [
        {
          'mars': {
          'primary': '#f95e4d',
          'primary-focus': '#d74742',
          'primary-content': '#eab41f',
          'secondary': '#DAA035',
          'secondary-focus': '#b8872e',
          'secondary-content': '#CA938A',
          'accent': '#7CC071',
          'accent-focus': '#689f60',
          'accent-content': '#CA938A',
          'neutral': '#BA0000',
          'neutral-focus': '#940000',
          'neutral-content': '#eab41f',
          'base-100': '#CE150A',
          'base-200': '#3A0000',
          'base-300': '#290000',
          'base-content': '#eab41f',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724'
          }
        },
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk'
    ],
  },

}