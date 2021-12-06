module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  // more options here
  plugins: [
      require('daisyui'),
    ]
,
  daisyui: {
    themes: [{"blossom":{"primary":"#c91f5d","primary-focus":"#a91b50","primary-content":"#ffffff","secondary":"#a68df6","secondary-focus":"#8462f3","secondary-content":"#ffffff","accent":"#84a92a","accent-focus":"#5e791e","accent-content":"#ffffff","neutral":"#3e2318","neutral-focus":"#271710","neutral-content":"#f0d6e8","base-100":"#cea69f","base-200":"#b87e74","base-300":"#74433a","base-content":"#251217","info":"#1c92f2","success":"#009485","warning":"#ff9900","error":"#ff5724","--rounded-box":"1rem","--rounded-btn":"1.9rem","--rounded-badge":"1.9rem","--animation-btn":".25s","--animation-input":".2s","--btn-text-case":"uppercase","--navbar-padding":".5rem","--border-btn":"1px"},"mars":{"primary":"#FF0000","primary-focus":"#ff3737","primary-content":"#070708","secondary":"#f23a0d","secondary-focus":"#f46440","secondary-content":"#ffffff","accent":"#88E1F2","accent-focus":"#a7eaf5","accent-content":"#070708","neutral":"#3D0000","neutral-focus":"#950101","neutral-content":"#FF0000","base-100":"#070708","base-200":"#3D0000","base-300":"#950101","base-content":"#FF0000","info":"#1c92f2","success":"#009485","warning":"#ff9900","error":"#ff5724"},"xmas":{"primary":"#EC255A","primary-focus":"#e84a74","primary-content":"#ffffff","secondary":"#799351","secondary-focus":"#a8c57c","secondary-content":"#312020","accent":"#F3F298","accent-focus":"#c5c37d","accent-content":"#312020","neutral":"#630000","neutral-focus":"#1B1717","neutral-content":"#ffffff","base-100":"#810000","base-200":"#630000","base-300":"#1B1717","base-content":"#EEEBDD","info":"#1c92f2","success":"#009485","warning":"#ff9900","error":"#ff5724"},"darkforest":{"primary":"#1eb854","primary-focus":"#188c40","primary-content":"#ffffff","secondary":"#20d55f","secondary-focus":"#18aa4b","secondary-content":"#ffffff","accent":"#d99330","accent-focus":"#b57721","accent-content":"#ffffff","neutral":"#2a2e37","neutral-focus":"#16181d","neutral-content":"#ffffff","base-100":"#3d4451","base-200":"#2a2e37","base-300":"#16181d","base-content":"#ffffff","info":"#66c7ff","success":"#87cf3a","warning":"#e1d460","error":"#ff6b6b"}},
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