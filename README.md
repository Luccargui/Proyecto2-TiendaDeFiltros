# 👟 Zapatillas App / Sneakers App

Aplicación web sencilla que muestra un catálogo de zapatillas (Nike, Adidas, New Balance, etc.) y permite filtrarlas por **marca** y **precio máximo**.  
Además, incluye un **carrito de compras simulado**, un menú de navegación y sugerencias aleatorias cuando no hay coincidencias en la búsqueda.  

---

A simple web application that displays a catalog of sneakers (Nike, Adidas, New Balance, etc.) and allows filtering them by **brand** and **maximum price**.  
It also includes a **simulated shopping cart**, a navigation menu, and random suggestions when no search results are found.  

---

## 📑 Tabla de Contenidos / Table of Contents

- [✨ Características / Features](#caracteristicas)
- [📦 Instalación y uso / Installation & Usage](#instalacion)
- [🛠️ Tecnologías usadas / Built With](#tecnologias)
- [🧩 Cómo funciona el filtrado paso a paso / How Filtering Works Step by Step](#filtrado)
  - [1. Selección de marca / Brand Selection](#marca)
  - [2. Precio máximo (`parseInt`) / Maximum Price (`parseInt`)](#precio)
  - [3. Manejo de resultados vacíos / Handling Empty Results](#resultados)
  - [4. Mostrar / ocultar mensajes / Show-Hide Messages](#mensajes)
- [📸 Capturas de pantalla / Screenshots](#capturas)
  - [🖥️ Desktop](#desktop)
  - [📱 Mobile](#mobile)
- [🤝 Contribución / Contributing](#contribucion)
- [👤 Autor / Author](#autor)

---

<a name="caracteristicas"></a>
## ✨ Características / Features

- 📂 Catálogo dinámico generado con **JavaScript Vanilla**.  
  📂 Dynamic catalog generated with **Vanilla JavaScript**.  

- 🔍 Filtros por marca y precio máximo.  
  🔍 Filter by brand and maximum price.  

- 🎲 Sugerencias aleatorias de zapatillas si no hay resultados (3 sin repetición).  
  🎲 Random sneaker suggestions if no results are found (3 without repetition).  

- 🛒 Carrito con contador de artículos.  
  🛒 Shopping cart with item counter.  

- 📱 Diseño adaptable con secciones de:  
  📱 Responsive design with sections:  
  - Header con menú y buscador.  
    Header with navigation and search.  
  - Hero section con imagen destacada.  
    Hero section with featured image.  
  - Filtros desplegables.  
    Collapsible filters.  
  - Cards con las zapatillas.  
    Sneaker cards.  
  - Footer con enlaces útiles.  
    Footer with useful links.  

---

<a name="instalacion"></a>
## 📦 Instalación y uso / Installation & Usage

1. Clona este repositorio / Clone this repository:  
   ```bash
   git clone https://github.com/usuario/zapatillas-app.git
   ```

2. Abre la carpeta del proyecto / Open the project folder:  
   ```bash
   cd zapatillas-app
   ```

3. Simplemente abre `index.html` en tu navegador. *(No necesita servidor ni dependencias externas.)*  
   Simply open `index.html` in your browser. *(No server or external dependencies required.)*  

---

<a name="tecnologias"></a>
## 🛠️ Tecnologías usadas / Built With

- **HTML5**  
- **CSS3** (variables, flexbox, responsive)  
- **JavaScript Vanilla (ES6)**  

---

<a name="filtrado"></a>
## 🧩 Cómo funciona el filtrado paso a paso / How Filtering Works Step by Step

<a name="marca"></a>
### 1. Selección de marca / Brand Selection
- El usuario escoge una marca en un `<select>`.  
- En el `filter()`, se compara el valor del select con la propiedad `zapa.marca`.  

- The user selects a brand from a `<select>`.  
- In `filter()`, the selected value is compared with `zapa.marca`.  

```js
if (marcaSeleccionada === "" || marcaSeleccionada === zapa.marca) { ... }
if (selectedBrand === "" || selectedBrand === zapa.marca) { ... }
```

---

<a name="precio"></a>
### 2. Precio máximo (`parseInt`) / Maximum Price (`parseInt`)
- El precio de cada zapatilla se guarda como string (`"120€"`).  
- Con `parseInt` lo convertimos a número para poder compararlo.  

- Sneaker prices are stored as strings (`"120€"`).  
- With `parseInt`, they are converted to numbers for comparison.  

```js
const precioNum = parseInt(zapa.precio.replace("€", "").trim());
if (isNaN(valorMax) || precioNum <= valorMax) { ... }

const priceNum = parseInt(zapa.precio.replace("€", "").trim());
if (isNaN(maxValue) || priceNum <= maxValue) { ... }
```

---

<a name="resultados"></a>
### 3. Manejo de resultados vacíos con `Math.random` / Handling Empty Results with `Math.random`
- Si ningún producto cumple los filtros, se seleccionan 3 zapatillas aleatorias distintas.  
- Se usa `Math.random` y `Math.floor` para obtener índices al azar sin repetición.  

- If no product matches, 3 random sneakers are displayed.  
- `Math.random` and `Math.floor` are used to get random non-repeated indices.  

```js
while (randomZapas.length < 3 && randomZapas.length < zapatillas.length) {
  const randomIndex = Math.floor(Math.random() * zapatillas.length);
  const randomItem = zapatillas[randomIndex];
  if (!randomZapas.includes(randomItem)) {
    randomZapas.push(randomItem);
  }
}

while (randomSneakers.length < 3 && randomSneakers.length < sneakers.length) {
  const randomIndex = Math.floor(Math.random() * sneakers.length);
  const randomItem = sneakers[randomIndex];
  if (!randomSneakers.includes(randomItem)) {
    randomSneakers.push(randomItem);
  }
}
```

---

<a name="mensajes"></a>
### 4. Mostrar / ocultar mensajes con `classList.toggle` / Show/Hide Messages with `classList.toggle`
- La sección con el mensaje de error (`h2Section`) se oculta por defecto con CSS.  
- Cuando no hay resultados, se le añade la clase `.visible`.  
- Cuando sí hay resultados, se elimina la clase para esconderla.  

- The "no results" section (`h2Section`) is hidden by default with CSS.  
- When no results are found, the `.visible` class is added.  
- When results exist, the class is removed.  

```js
if (filtered.length > 0) {
  h2Section.classList.remove("visible");
} else {
  h2Section.classList.add("visible");
}
```

---

<a name="capturas"></a>
## 📸 Capturas de pantalla / Screenshots

<a name="desktop"></a>
### 🖥️ Desktop

**Normal**  
<img src="https://github.com/user-attachments/assets/b99ab5b2-835b-4523-b6de-6c388f73525d" width="600" />

**Sección de filtros / Filters Section**  
<img src="https://github.com/user-attachments/assets/d7ba5b3a-3de7-4f9c-a208-2bf1a14b7539" width="600" />

**Al seleccionar comprar / When selecting Buy**  
<img src="https://github.com/user-attachments/assets/40716e83-f848-4725-a08e-bc33acd08b5f" width="600" />

---

<a name="mobile"></a>
### 📱 Mobile

**Normal**  
<img src="https://github.com/user-attachments/assets/bc6d8dc9-58bc-40f9-933d-74616b146ebb" width="250" />

**Menú desplegado / Menu opened**  
<img src="https://github.com/user-attachments/assets/9c8e7104-9df5-432f-9ed7-2bba18af0030" width="250" />

**Sección de filtros / Filters Section**  
<img src="https://github.com/user-attachments/assets/f6ff52d5-f767-4bd4-9ebc-db4785c75cbb" width="250" />

**Al seleccionar comprar / When selecting Buy**  
<img src="https://github.com/user-attachments/assets/c8c84b33-cfac-4649-b279-fd6ef9ef91c8" width="250" />

---

<a name="contribucion"></a>
## 🤝 Contribución / Contributing

Si quieres contribuir:  
If you want to contribute:

1. Haz un fork del proyecto.  
   Fork the project.  
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).  
   Create a new branch (`git checkout -b feature/new-feature`).  
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).  
   Commit your changes (`git commit -m 'Add new feature'`).  
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).  
   Push to your branch (`git push origin feature/new-feature`).  
5. Abre un Pull Request.  
   Open a Pull Request.  

---

<a name="autor"></a>
## 👤 Autor / Author

Proyecto desarrollado por **Lucía Carrera** ✨  
Project developed by **Lucía Carrera** ✨  

- GitHub: [@Luccargui](https://github.com/Luccargui)  
- LinkedIn: [Lucía Carrera Guillén](https://www.linkedin.com/in/lucia-carrera-guillen/)  
