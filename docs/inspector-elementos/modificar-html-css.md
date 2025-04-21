---
sidebar_position: 5
---

# Modificar HTML y CSS

Una de las funciones más útiles del inspector es la posibilidad de **modificar temporalmente** el código HTML y CSS directamente desde el navegador. Esto es ideal para hacer pruebas rápidas de diseño, depurar errores o entender cómo funciona una página.

## Cómo modificar HTML

1. **Haz clic derecho** sobre el elemento que deseas modificar y selecciona “Inspeccionar”.
2. En el panel del inspector (sección "Elements"), verás el código HTML resaltado.
3. Haz doble clic sobre una etiqueta o texto para editarlo.
4. También puedes hacer clic derecho sobre cualquier elemento y elegir:
   - “Editar como HTML”
   - “Eliminar nodo” (para quitarlo temporalmente)

> ✅ Los cambios son instantáneos, pero **no permanentes**. Se pierden al recargar la página.

---

## Cómo modificar CSS

1. En el mismo panel, a la derecha encontrarás la pestaña de **"Styles"**.
2. Puedes:
   - Modificar valores de propiedades CSS existentes.
   - Agregar nuevas propiedades haciendo clic en una línea vacía.
   - Desactivar propiedades temporalmente desmarcando la casilla al lado.
3. También puedes ver reglas heredadas, pseudoelementos (`::before`, `::after`) y media queries activas.

---

## ¿Para qué sirve esto?

- Probar rápidamente nuevos estilos sin modificar el código fuente real.
- Ver cómo responden los cambios visuales en tiempo real.
- Ajustar márgenes, tamaños, colores, posiciones, etc., para encontrar un diseño ideal.

---

![Modificando CSS en el inspector](https://i.ibb.co/tT5ByVmZ/Screenshot-7.png)

> 🔍 Recuerda: estos cambios solo son visibles en tu navegador y se pierden al recargar. Para aplicar cambios permanentes, debes hacerlo en el código fuente de tu proyecto.
