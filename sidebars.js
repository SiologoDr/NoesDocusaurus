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
    {
      type: 'category',
      label: 'Gestor de Contraseñas',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'gestor-contrasenas/introduccion',
          label: 'Introducción',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/que-es-y-por-que-usar',
          label: '¿Qué es y por qué usarlo?',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/tipos-de-gestores',
          label: 'Tipos de gestores',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/requisitos-tecnicos',
          label: 'Requisitos técnicos',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/estructura-del-sistema',
          label: 'Estructura del sistema',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/backend-seguridad',
          label: 'Backend y seguridad',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/frontend-experiencia-usuario',
          label: 'Frontend y experiencia de usuario',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/cifrado-y-almacenamiento',
          label: 'Cifrado y almacenamiento',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/autenticacion-doble-factor',
          label: 'Autenticación en dos pasos',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/deploy-y-pruebas',
          label: 'Deploy y pruebas',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/buenas-practicas-uso',
          label: 'Buenas prácticas de uso',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/errores-comunes',
          label: 'Errores comunes',
        },
        {
          type: 'doc',
          id: 'gestor-contrasenas/herramientas-recomendadas',
          label: 'Herramientas recomendadas',
        },
      ],
    },
  ],
};

export default sidebars;