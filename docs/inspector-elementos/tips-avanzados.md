---
sidebar_position: 7
---

# Tips avanzados

El inspector de elementos no solo sirve para cambiar colores o mover elementos. También permite acciones avanzadas muy útiles si eres desarrollador, diseñador o simplemente curioso.

---

## 1. Editar eventos y escuchas

Puedes revisar los eventos asociados a cualquier elemento.

- Haz clic derecho sobre el elemento HTML en el panel de Elementos.
- Selecciona **"Event Listeners"** en la pestaña lateral.
- Verás todos los eventos (click, hover, scroll, etc.) asociados.
- Puedes hacer clic en ellos y ver el código exacto.

---

## 2. Simular dispositivos móviles

Simula cómo se ve la web en diferentes pantallas:

- Haz clic en el icono 📱 en la parte superior izquierda del panel.
- Elige entre dispositivos como iPhone, Galaxy, iPad o define tu propio tamaño.
- También puedes cambiar entre vistas verticales y horizontales.

> Ideal para probar diseño responsivo.

---

## 3. Cambiar el User-Agent

Ve a la pestaña **Network** > haz clic en los 3 puntos verticales > **More tools** > **Network conditions**.

- Desmarca "Use browser default".
- Cambia el User-Agent para ver cómo responde una página si fueras otro navegador o bot.

---

## 4. Performance y Lighthouse

- Usa la pestaña **Performance** para grabar y analizar el rendimiento al navegar.
- Con **Lighthouse** puedes hacer una auditoría completa: accesibilidad, SEO, buenas prácticas, velocidad y más.

---

## 5. Buscar texto o código

Pulsa `Ctrl + Shift + F` (o `Cmd + Option + F` en Mac) para hacer una búsqueda global en todos los archivos cargados. Muy útil para encontrar código, rutas, textos ocultos, etc.

---

## 6. Guardar cambios como archivos

¿Editaste CSS directamente desde el inspector y no quieres perderlo?

- Ve a la pestaña **Sources**.
- Haz clic derecho en un archivo y selecciona **"Save As"**.
- Guarda el archivo modificado en tu equipo.

---

## 7. Monitorear cambios en tiempo real

- Abre la pestaña **Console**.
- Usa `monitorEvents(elemento)` para rastrear eventos como clics o teclas.
- Ejemplo:

```js
monitorEvents(document.querySelector('button'))
```

> 🔍 Explorar estas herramientas te ayuda a aprender cómo funcionan las páginas detrás de escena y a mejorar tus habilidades técnicas.