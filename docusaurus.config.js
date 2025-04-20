import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Brota',
  tagline: 'Explora desde lo básico hasta trucos avanzados del inspector de elementos. Aprende a analizar estructuras web, depurar errores y personalizar páginas como todo un experto. Todo explicado paso a paso y sin rodeos.',
  favicon: 'img/logo.png',

  url: 'https://your-docusaurus-site.example.com',

  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        disableSwitch: true,
        defaultMode: 'light', // o 'dark' si prefieres oscuro por defecto
      },
      navbar: {
        title: 'Brota',
        logo: {
          alt: 'Brota Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Inicio',
          },
          {
            label: 'Inspector de Elementos',
            to: '/docs/inspector-elementos/introduccion',
          },
          {
            href: 'https://github.com/SiologoDr/NoesDocusaurus',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
          },
          {
            href: 'https://www.linkedin.com/in/juan-ysla-cadenas-9ba852286/',
            position: 'right',
            label: 'LinkedIn',
            className: 'header-linkedin-link',
          },
        ],
      },
      
      footer: {
        links: [
          {
            title: 'Contenido',
            items: [
              {
                label: 'Inicio',
                to: '/docs/intro',
              },
              {
                label: 'Inspector de Elementos',
                to: '/docs/inspector-elementos/introduccion',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Invitacion al Grupo de Discord',
                href: 'https://discord.gg/H6YY37VZPA',
              },
            ],
          },
          {
            title: 'EXTRA',
            items: [
              {
                label: 'Repositorio del Proyecto en GitHub',
                href: 'https://github.com/SiologoDr/NoesDocusaurus',
              },
              {
                label: 'Perfil del Autor en Linkedln',
                href: 'https://www.linkedin.com/in/juan-ysla-cadenas-9ba852286/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brota, aprende de forma autonoma.`,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;
