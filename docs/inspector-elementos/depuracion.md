---
sidebar_position: 9
---

# Depuración

El inspector de elementos no solo sirve para ver HTML y CSS, también es una herramienta poderosa para **detectar y solucionar errores** en sitios web.

---

## ¿Qué es depurar?

Depurar (o hacer debugging) significa encontrar y corregir errores en el código de una página, ya sea en su estructura, estilos o funcionalidad.

---

## Herramientas clave para la depuración

### 1. **Consola**
La consola muestra mensajes del navegador como errores, advertencias y logs del desarrollador.

- Puedes escribir código JavaScript en tiempo real.
- Muestra errores de sintaxis y rutas mal configuradas.

📸 Ejemplo de consola con error: 
![Consola mostrando error de JavaScript](https://i.ibb.co/HfZsJyLP/Screenshot-9.png)

---

### 2. **Sources**
Aquí puedes ver y editar archivos JS, HTML, CSS, e incluso poner puntos de interrupción (breakpoints).

- Examina el flujo de ejecución paso a paso.
- Modifica valores de variables en tiempo real.

---

### 3. **Network**
Muestra las peticiones y respuestas entre el navegador y el servidor.

- Detecta si una imagen, archivo JS o API no está cargando.
- Revisa el estado de las respuestas (200, 404, 500, etc).

📸 Vista de pestaña Network:
![Network tab en Chrome DevTools](https://i.ibb.co/zWCL5DPn/Screenshot-10.png)

---

### 4. **Breakpoints (puntos de interrupción)**
Sirven para pausar la ejecución del código en un punto específico.

- Añade un breakpoint en el archivo JS desde la pestaña "Sources".
- Observa valores de variables y lógica en ejecución.

---

## Consejos

- Usa `console.log()` en tu JS para imprimir valores y rastrear errores.
- Elimina breakpoints cuando termines, para evitar confusiones.
- Revisa la pestaña “Network” si tu página no carga correctamente algo.

---

> 🛠️ Aprender a depurar es uno de los pasos más importantes para mejorar como desarrollador web.
