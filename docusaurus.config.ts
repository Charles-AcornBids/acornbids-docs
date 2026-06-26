import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AcornBids Help Center',
  tagline: 'Find, qualify, and pursue government opportunities with repeatable AcornBids workflows.',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.acornbids.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AcornBids', // Update this to the GitHub org/user that owns the docs repo.
  projectName: 'acornbids-docs',

  onBrokenLinks: 'throw',

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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/acornbids-social-card.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AcornBids',
      logo: {
        alt: 'AcornBids logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Product guides',
        },
        {
          to: '/docs/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://app.acornbids.com',
          label: 'Open AcornBids',
          position: 'right',
          className: 'navbar__item--app-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get started',
              to: '/docs/getting-started',
            },
            {
              label: 'Saved searches',
              to: '/docs/saved-searches',
            },
            {
              label: 'Insights and questions',
              to: '/docs/insights-and-questions',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Open AcornBids',
              href: 'https://app.acornbids.com',
            },
            {
              label: 'AcornBids website',
              href: 'https://acornbids.com',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'Release notes',
              to: '/docs/release-notes',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AcornBids.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
