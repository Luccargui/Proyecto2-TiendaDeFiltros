# 👟 Zapatillas App

Aplicación web sencilla que muestra un catálogo de zapatillas (Nike, Adidas, New Balance, etc.) y permite filtrarlas por **marca** y **precio máximo**.  
Además, incluye un **carrito de compras simulado**, un menú de navegación y sugerencias aleatorias cuando no hay coincidencias en la búsqueda.

---

## ✨ Características

- 📂 Catálogo dinámico generado con **JavaScript Vanilla**.
- 🔍 Filtros por marca y precio máximo.
- 🎲 Sugerencias aleatorias de zapatillas si no hay resultados (3 sin repetición).
- 🛒 Carrito con contador de artículos.
- 📱 Diseño adaptable con secciones de:
  - Header con menú y buscador.
  - Hero section con imagen destacada.
  - Filtros desplegables.
  - Cards con las zapatillas.
  - Footer con enlaces útiles.

---

## 📦 Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/zapatillas-app.git
   ```

2. Abre la carpeta del proyecto:
   ```bash
   cd zapatillas-app
   ```

3. Simplemente abre `index.html` en tu navegador.  
   *(No necesita servidor ni dependencias externas.)*

---

## 🛠️ Tecnologías usadas

- **HTML5**
- **CSS3** (variables, flexbox, responsive)
- **JavaScript Vanilla (ES6)**

---

## 🧩 Cómo funciona el filtrado paso a paso

El filtrado combina varias funciones de JavaScript para que la experiencia sea interactiva:

1. **Selección de marca**
   - El usuario escoge una marca en un `<select>`.
   - En el `filter()`, se compara el valor del select con la propiedad `zapa.marca`.

   ```js
   if (marcaSeleccionada === "" || marcaSeleccionada === zapa.marca) { ... }
   ```

2. **Precio máximo (`parseInt`)**
   - El precio de cada zapatilla se guarda como string (`"120€"`).
   - Con `parseInt` lo convertimos a número para poder compararlo:

   ```js
   const precioNum = parseInt(zapa.precio.replace("€", "").trim());
   if (isNaN(valorMax) || precioNum <= valorMax) { ... }
   ```

3. **Manejo de resultados vacíos con `Math.random`**
   - Si ningún producto cumple los filtros, se seleccionan 3 zapatillas aleatorias distintas.
   - Se usa `Math.random` y `Math.floor` para obtener índices al azar sin repetición:

   ```js
   while (randomZapas.length < 3 && randomZapas.length < zapatillas.length) {
     const randomIndex = Math.floor(Math.random() * zapatillas.length);
     const randomItem = zapatillas[randomIndex];
     if (!randomZapas.includes(randomItem)) {
       randomZapas.push(randomItem);
     }
   }
   ```

4. **Mostrar / ocultar mensajes con `classList.toggle`**
   - La sección con el mensaje de error (`h2Section`) se oculta por defecto con CSS.
   - Cuando no hay resultados, se le añade la clase `.visible` para mostrarla.
   - Cuando sí hay resultados, se elimina esa clase para esconderla.

   ```js
   if (filtered.length > 0) {
     h2Section.classList.remove("visible");
   } else {
     h2Section.classList.add("visible");
   }
   ```

---

## 📸 Capturas de pantalla

### 🖥️ Desktop

**Normal**  
<img src="https://github.com/user-attachments/assets/b99ab5b2-835b-4523-b6de-6c388f73525d" width="600" />

**Sección de filtros**  
<img src="https://github.com/user-attachments/assets/d7ba5b3a-3de7-4f9c-a208-2bf1a14b7539" width="600" />

**Al seleccionar comprar**  
<img src="https://github.com/user-attachments/assets/40716e83-f848-4725-a08e-bc33acd08b5f" width="600" />

---

### 📱 Mobile

**Normal**  
<img src="https://github.com/user-attachments/assets/bc6d8dc9-58bc-40f9-933d-74616b146ebb" width="250" />

**Menú desplegado**  
<img src="https://github.com/user-attachments/assets/9c8e7104-9df5-432f-9ed7-2bba18af0030" width="250" />

**Sección de filtros**  
<img src="https://github.com/user-attachments/assets/f6ff52d5-f767-4bd4-9ebc-db4785c75cbb" width="250" />

**Al seleccionar comprar**  
<img src="https://github.com/user-attachments/assets/c8c84b33-cfac-4649-b279-fd6ef9ef91c8" width="250" />

---

## 🤝 Contribución

Si quieres contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## 👤 Autor

Proyecto desarrollado por **Lucía Carrera** ✨  

- GitHub: [@Luccargui](https://github.com/Luccargui)  
- LinkedIn: [Lucía Carrera Guillén](https://www.linkedin.com/in/lucia-carrera-guillen/)  
