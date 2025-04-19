import React from 'react';
import OriginalSidebarItemLink from '@theme-original/DocSidebarItem/Link';
import {
  FaHome,
  FaCogs,
  FaBook,
  FaInfoCircle,
  FaMousePointer,
  FaQuestionCircle,
  FaCubes,
  FaCode,
  FaFolderOpen,
  FaLightbulb,
  FaKeyboard,
  FaSearch,
  FaProjectDiagram,
  FaWrench
} from 'react-icons/fa';

const iconMap = {
  // Inicio
  'Inicio': <FaHome style={{ marginRight: 8 }} />,
  'Crear Página': <FaCogs style={{ marginRight: 8 }} />,
  'Crear Documento': <FaBook style={{ marginRight: 8 }} />,

  // Inspector de Elementos
  'Introducción': <FaInfoCircle style={{ marginRight: 8 }} />,
  'Cómo se usa': <FaMousePointer style={{ marginRight: 8 }} />,
  '¿Para qué sirve?': <FaQuestionCircle style={{ marginRight: 8 }} />,
  'Elementos más comunes': <FaCubes style={{ marginRight: 8 }} />,
  'Modificar HTML y CSS': <FaCode style={{ marginRight: 8 }} />,
  'Ver recursos': <FaFolderOpen style={{ marginRight: 8 }} />,
  'Tips avanzados': <FaLightbulb style={{ marginRight: 8 }} />,
  'Atajos Recomendados': <FaKeyboard style={{ marginRight: 8 }} />,
  'Depuración con el inspector': <FaSearch style={{ marginRight: 8 }} />,
  'Casos prácticos de uso': <FaProjectDiagram style={{ marginRight: 8 }} />,
  'Herramientas relacionadas': <FaWrench style={{ marginRight: 8 }} />,
};

export default function DocSidebarItemLinkWrapper(props) {
  const originalLabel = props.item.label;
  const icon = iconMap[originalLabel];

  return (
    <OriginalSidebarItemLink
      {...props}
      item={{
        ...props.item,
        label: (
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            {originalLabel}
          </span>
        ),
      }}
    />
  );
}
