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
  FaLock,
  FaListAlt,
  FaServer,
  FaUserShield,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaBug,
  FaToolbox,
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

  // Gestor de Contraseñas
  '¿Qué es y por qué usarlo?': <FaLock style={{ marginRight: 8 }} />,
  'Tipos de gestores': <FaListAlt style={{ marginRight: 8 }} />,
  'Requisitos técnicos': <FaServer style={{ marginRight: 8 }} />,
  'Estructura del sistema': <FaCubes style={{ marginRight: 8 }} />,
  'Backend y seguridad': <FaUserShield style={{ marginRight: 8 }} />,
  'Frontend y experiencia de usuario': <FaLaptopCode style={{ marginRight: 8 }} />,
  'Cifrado y almacenamiento': <FaDatabase style={{ marginRight: 8 }} />,
  'Autenticación en dos pasos': <FaShieldAlt style={{ marginRight: 8 }} />,
  'Deploy y pruebas': <FaRocket style={{ marginRight: 8 }} />,
  'Buenas prácticas de uso': <FaCheckCircle style={{ marginRight: 8 }} />,
  'Errores comunes': <FaBug style={{ marginRight: 8 }} />,
  'Herramientas recomendadas': <FaToolbox style={{ marginRight: 8 }} />,
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
