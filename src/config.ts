export const SITE = {
  title: 'Blossom+',
  description: 'Your daisyUI Theme manager',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/BleedingEffigy/astro/blob/master/public/BlossomOG.png',
    alt: 'Landing page of Blossom+, showing themes and features',
  },
  twitter: 'alexwhocodes255',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: '', header: true },
    { text: 'Guides', header: true },
    { text: 'Getting Started', link: 'en/introduction' },

    { text: 'Commands', header: true },
    { text: 'Init', link: 'en/init' },
    { text: 'Add (theme)', link: 'en/add' },
    { text: 'List', link: 'en/list' },
    
    { text: 'Themes', header: true },
    { text: 'Themes List', link: 'en/ThemesList' },
  ],
};
