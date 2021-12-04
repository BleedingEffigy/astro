module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  // more options here
  plugins: [
      require('daisyui'),
    ]
,
  daisyui: {
    themes: [{"mars":{"primary":"#f95e4d","primary-focus":"#d74742","primary-content":"#eab41f","secondary":"#DAA035","secondary-focus":"#b8872e","secondary-content":"#CA938A","accent":"#7CC071","accent-focus":"#689f60","accent-content":"#CA938A","neutral":"#BA0000","neutral-focus":"#940000","neutral-content":"#eab41f","base-100":"#CE150A","base-200":"#3A0000","base-300":"#290000","base-content":"#eab41f","info":"#2094f3","success":"#009485","warning":"#ff9900","error":"#ff5724"},"xmas":{"primary":"#FF999A","primary-focus":"#d68586","primary-content":"#ffffff","secondary":"#B2E0AE","secondary-focus":"#8fb18c","secondary-content":"#ffffff","accent":"#F3F298","accent-focus":"#c5c37d","accent-content":"#ffffff","neutral":"#546F19","neutral-focus":"#455b15","neutral-content":"#ffffff","base-100":"#7C0C00","base-200":"#F8B229","base-300":"#55741C","base-content":"#F6EBDB","info":"#2AF0FF","success":"#60DCAE","warning":"#DFD43A","error":"#E70E12"},"blossom":{"primary":"#c91f5d","primary-focus":"#a0184b","primary-content":"#ffffff","secondary":"#a68df6","secondary-focus":"#8462f3","secondary-content":"#ffffff","accent":"#88dbdd","accent-focus":"#62ced0","accent-content":"#ffffff","neutral":"#3e2318","neutral-focus":"#271710","neutral-content":"#f0d6e8","base-100":"#cea69f","base-200":"#a76567","base-300":"#8d5258","base-content":"#251217","info":"#1c92f2","success":"#009485","warning":"#ff9900","error":"#ff5724","--rounded-box":"1rem","--rounded-btn":"1.9rem","--rounded-badge":"1.9rem","--animation-btn":".25s","--animation-input":".2s","--btn-text-case":"uppercase","--navbar-padding":".5rem","--border-btn":"1px"}},
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