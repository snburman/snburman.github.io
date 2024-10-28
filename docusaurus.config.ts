import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FnCmp Docs',
  tagline: '',
  favicon: 'favicon.ico',
  staticDirectories: ['public'],

  // Set the production url of your site here
  url: 'https://snburman.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'snburman', // Usually your GitHub org/user name.
  projectName: 'snburman.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Sean Burman',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'fncmpSidebar',
          position: 'left',
          label: 'FnCmp',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mnemoSidebar',
          position: 'left',
          label: 'Mnemo',
          href: 'https://pkg.go.dev/github.com/snburman/mnemo',
        },
        {
          href: 'https://github.com/snburman',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'light',
    //   copyright: `Copyright © ${new Date().getFullYear()} Sean Burman.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
