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
  url: 'https://satyamakgec.github.io', // Your website URL
  baseUrl: '/terminalApp/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'terminalApp',
  organizationName: 'satyamakgec',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // { search: true },
    {doc: 'intro/creating-account', label: 'Docs'},
    // {doc: 'apis/apis-creation', label: 'Tutorials'},
    {page: 'tutorials', label: 'Tutorials'},
    {page: 'support', label: 'Support'},
    // {blog: true, label: 'Community'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/terminal-logo.png',
  footerIcon: 'img/terminal-logo.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

 docsSideNavCollapsible: true,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Terminal.co`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  // onPageNav: 'separate',
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
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;

// function typeform() {
//   const request = require('request');

//   request.get('https://api.typeform.com/forms/B86TE9/responses?since=2019-03-01T00%3A00%3A00&until=2020-07-10T00%3A00%3A00', {
//     'auth': {
//       'user': 'amitnirala3@gmail.com',
//       'pass': 'qwerty@123',
//       'bearer': 'Bsrmv6JH1JyZAXkk4LRhE7XsytP4x5oZkfXZQCGkUH56'
//     }
//   }, function(err, response, body) {
//     return body;  
//     // console.log(body);
//   });
// }


// const typeformData = "Hello";
// console.log(typeformData);

