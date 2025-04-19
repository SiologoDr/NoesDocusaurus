/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Inicio',
    },
    {
      type: 'category',
      label: 'Inspector de Elementos',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'inspector-elementos/introduccion',
          label: 'Introducción',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/como-se-usa',
          label: 'Cómo se usa',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/para-que-sirve',
          label: '¿Para qué sirve?',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/elementos-mas-comunes',
          label: 'Elementos más comunes',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/modificar-html-css',
          label: 'Modificar HTML y CSS',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/ver-recursos',
          label: 'Ver recursos',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/tips-avanzados',
          label: 'Tips avanzados',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/atajos',
          label: 'Atajos Recomendados',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/depuracion',
          label: 'Depuración con el inspector',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/casos-practicos',
          label: 'Casos prácticos de uso',
        },
        {
          type: 'doc',
          id: 'inspector-elementos/herramientas-relacionadas',
          label: 'Herramientas relacionadas',
        },
      ],
    },
  ],
};

export default sidebars;