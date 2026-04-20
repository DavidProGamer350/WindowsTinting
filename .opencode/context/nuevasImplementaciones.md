# Nuevas Implementaciones para Windows Tinting JD

## Plan de Implementación

Se implementarán las siguientes funcionalidades una por una. После de cada implementación se verificará que todo funcione correctamente antes de pasar a la siguiente.

---

## 1. Selector Visual de Tintado (Visual Tint Selector)
- **Descripción**: Muestra una previsualización del auto con diferentes niveles de oscuridad
- **Funcionalidad**: Arrastra un slider para ver distintos niveles (20%, 35%, 50%)
- **Archivo a modificar**: index.html, css/styles.css, js/script.js
- **Estado**: Pendiente

---

## 2. Widget del Clima en Vivo (Live Weather Widget)
- **Descripción**: Muestra la temperatura actual de Miami
- **Funcionalidad**: "Con XX°C, el polarizado reduce el calor hasta 60%"
- **Archivo a modificar**: index.html, css/styles.css, js/script.js
- **Estado**: Pendiente

---

## 3. Timeline de Proceso (Process Timeline)
- **Descripción**: Infografía animada del paso a paso
- **Pasos**: limpieza → aplicación → curado → entrega
- **Funcionalidad**: Tiempo estimado de cada etapa
- **Archivo a modificar**: index.html, css/styles.css, js/script.js
- **Estado**: Pendiente

---

## 4. Galería 360° (360 Gallery)
- **Descripción**: Vista de 360 grados de autos polarizados
- **Funcionalidad**: Arrastrar para rotar la vista
- **Archivo a modificar**: index.html, css/styles.css, js/script.js
- **Estado**: Pendiente

---

## 5. Promociones por Tiempo Limitado (Limited Time Promotions)
- **Descripción**: Banner dinámico con ofertas
- **Funcionalidad**: "Oferta especial: 10% descuento esta semana" con cuenta regresiva
- **Archivo a modificar**: index.html, css/styles.css, js/script.js
- **Estado**: Pendiente

---

## 6. Blog/Consejos (Blog/Tips)
- **Descripción**: Sección de artículos y consejos
- **Artículos**:
  - "Cómo mantener tu tintado"
  - "Tintado vs ventanas polarizadas de fábrica"
- **Funcionalidad**: Blog con artículos, sin backend (puede ser estático)
- **Archivo a modificar**: blog.html (nuevo archivo), css/styles.css, js/script.js
- **Estado**: Pendiente

---

## Orden de Implementación

1. ~~Selector Visual de Tintado~~ ✅ COMPLETADO
2. Widget del Clima en Vivo
3. Timeline de Proceso
4. Galería 360°
5. Promociones por Tiempo Limitado
6. Blog/Consejos

---

## 1. Selector Visual de Tintado (Completado)

**Fecha de implementación**: 20 de Abril 2026

**Archivos creados**:
- `simulator.html` - Página completa del simulador

**Funcionalidades**:
- Buscador de autos con base de datos de 40+ modelos
- Botones de selección rápida para modelos populares
- Niveles de tintado: 0%, 5%, 20%, 30%, 50%
- Overlay con efecto visual de tintado
- Descripción de cada nivel
- CTA hacia WhatsApp con el nivel seleccionado

**Archivos modificados**:
- `index.html` - Agregado link al Simulator
- `tipos.html` - Agregado link al Simulator
- `faq.html` - Agregado link al Simulator
