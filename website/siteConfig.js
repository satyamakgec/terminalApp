/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.terminal.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Terminal', // Title for your website.
  tagline: 'A terminal website',
  url: 'https://docs.terminal.co', // Your website URL
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'terminalApp',
  organizationName: 'Terminal',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'basics/getting-started', label: 'Docs' },
    { href: '/api', label: 'API' },
    { page: 'tutorials', label: 'Tutorials' },
    { href: 'http://community.terminal.co', label: 'Community' },
  ],

  editUrl: 'https://github.com/satyamakgec/terminalApp/tree/master/docs/',
  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/terminal-logo.png',
  footerIcon: 'img/terminal-logo-footer.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#333333',
    secondaryColor: '#333333',
  },

  fonts: {
    myFont: [
      'Nunito',
      'Serif'
    ],
    myOtherFont: [
      '-apple-system',
      'system-ui'
    ]
  },

  algolia: {
    apiKey: '2c7f3669371a5ceef0069bcb7fb1083f',
    indexName: 'terminal_co',
    algoliaOptions: {}, // Optional, if provided by Algolia
  },

  docsSideNavCollapsible: false,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Terminal.co`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/terminal-logo.png',
  twitterImage: 'img/terminal-logo.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/satyamakgec/terminalApp/tree/master/docs/',
};

module.exports = siteConfig;
