const zapatillas = [
  {
    marca: "Nike Original",
    modelo: "Air Max 1",
    precio: "120.00",
    imagen: "./assets/zapas/NikeOriginalAirMax1.png",
    enlace: "https://www.decathlon.es/es/p/mp/nike/zapatillas-air-max-1-white-black-medium-olive/_/R-p-67faa315-bea9-40cc-bcca-529d977cb912",
  },
  {
    marca: "New Balance",
    modelo: "NB 9060",
    precio: "80.00",
    imagen: "./assets/zapas/NewBalanceNB9060.png",
    enlace: "https://www.thenextsole.com/es/p/new-balance-mens-u9060ib-arctic-grey-u9060ib",
  },
  {
    marca: "Nike Original",
    modelo: "Nike Revolution",
    precio: "90.00",
    imagen: "./assets/zapas/NikeOriginalNikeRevolution.png",
    enlace: "https://www.amazon.es/NIKE-Revoluci%C3%B3n-Zapatillas-Running-Hombre/dp/B0DCTGXY3Y",
  },
  {
    marca: "Adidas Original",
    modelo: "Forum Buckle",
    precio: "100.00",
    imagen: "./assets/zapas/AdidasOriginalForumBuckle.png",
    enlace:"https://www.amazon.com/-/es/adidas-Forum-Buckle-GY4900-Bunny/dp/B0BS1YLPKP",
  },
  {
    marca: "Adidas Original",
    modelo: "Campus",
    precio: "120.00",
    imagen: "./assets/zapas/AdidasOriginalCampus.png",
    enlace:"https://www.snipes.com/es-es/p/adidas-originals-campus-00s-sneaker-verde-24861",
  },
  {
    marca: "New Balance",
    modelo: "NB 327",
    precio: "120.00",
    imagen: "./assets/zapas/NewBalanceNB327.png",
    enlace: "https://sneakers123.com/es/new-balance-327-casablanca-ms327cab",
  },
  {
    marca: "Nike Original",
    modelo: "Dunk Low",
    precio: "100.00",
    imagen: "./assets/zapas/NikeOriginalDunkLow.png",
    enlace:"https://www.decathlon.es/es/p/mp/nike/zapatillas-dunk-low-green-glow/_/R-p-6ff067ef-adfd-4a39-81a2-5e7b25a709aa",
  },
  {
    marca: "Adidas Original",
    modelo: "Gazelle",
    precio: "90.00",
    imagen: "./assets/zapas/AdidasOriginalGazelle.png",
    enlace:"https://www.amazon.es/adidas-Gazelle-Bold-Zapatillas-Mujer/dp/B0BSVNZCYX?th=1&psc=1",
  },
  {
    marca: "Nike Original",
    modelo: "Air Max SC",
    precio: "150.00",
    imagen: "./assets/zapas/NikeOriginalAirMaxSC.png",
    enlace:"https://www.amazon.com/-/es/Nike-Zapatos-deportivos-bajos-hombre/dp/B0CWVVH1WW",
  },
  {
    marca: "Adidas Original",
    modelo: "Handball Spezial",
    precio: "120.00",
    imagen: "./assets/zapas/AdidasOriginalHandBallSpezial.png",
    enlace: "https://www.snipes.com/es-es/p/adidas-originals-sneaker-handball-spezial-w-nero-92613",
   },
  {
    marca: "Nike Original",
    modelo: "Air Force",
    precio: "130.00",
    imagen: "./assets/zapas/NikeOriginalAirForce.png",
    enlace: "https://sneakers123.com/es/nike-air-force-1-07-cosmic-clay-s-size-8-fz4627-800",
  },
  {
    marca: "New Balance",
    modelo: "NB 9060",
    precio: "100.00",
    imagen: "./assets/zapas/NewBalanceNB90602.png",
    enlace:"https://www.decathlon.es/es/p/mp/new-balance/zapatillas-9060-rich-oak-burgundy/_/R-p-178d1187-d209-4d70-93bf-d8b23ecbd623",
  },
  {
    marca: "New Balance",
    modelo: "NB 480",
    precio: "150.00",
    imagen: "./assets/zapas/NewBalance480.png",
    enlace: "https://www.spartoo.es/New-Balance-28499-x27148410.php#rst",
  },
  {
    marca: "Nike Original",
    modelo: "Full Force Low",
    precio: "70.00",
    imagen: "./assets/zapas/NikeOriginalFullForceLow.png",
    enlace: "https://www.amazon.com.mx/NIKE-FB1362-Tenis-para-Hombre/dp/B0CR1LY27Y",
  },
  {
    marca: "Nike Original",
    modelo: "Air Max SC",
    precio: "160.00",
    imagen: "./assets/zapas/NikeOriginalAirMaxSC2.png",
    enlace:"https://www.amazon.es/Nike-Air-MAX-Zapatillas-Hombre/dp/B0CSPR15V6",
  },
  {
    marca: "Adidas Original",
    modelo: "Handball Spezial",
    precio: "140.00",
    imagen: "./assets/zapas/AdidasOriginalHandballSpezial2.png",
    enlace:"https://www.sivasdescalzo.com/es/p/handball-spezial-ef5747",
  }
];

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.createElement("main");
document.body.insertBefore(main, footer);

const menu = document.createElement("div");
const logoMenu = document.createElement("img");
const divOpcionesMenu = document.createElement("div");
const divMenuIcons = document.createElement("div");
const ulOpcionesMenu = document.createElement("ul");
const li1OpcionesMenu = document.createElement("li");
const li2OpcionesMenu = document.createElement("li");
const li3OpcionesMenu = document.createElement("li");
const li4OpcionesMenu = document.createElement("li");
const burgerMenu = document.createElement("img");
const iconFilter = document.createElement("img");
const divShoppingBasket = document.createElement("div");
const shoppingBasket = document.createElement("img");
const numberOfItemsSold = document.createElement("p");
const user = document.createElement("img");

const toggleFilters = () => {
  mainDivFilter.classList.toggle("visible");
  if (imgFilter.src.includes("iconArrowDownward.png")) {
    imgFilter.src = "./assets/otros/iconArrowUpward.png";
  } else {
    imgFilter.src = "./assets/otros/iconArrowDownward.png";
  }
};
menu.id = "menu";
logoMenu.src = "./assets/header/logo.png";
logoMenu.alt = "logo-menu";
divOpcionesMenu.classList.add("divsMenu");
divMenuIcons.classList.add("divsMenu");
li1OpcionesMenu.innerHTML = "Hombres";
li2OpcionesMenu.innerHTML = "Mujeres";
li3OpcionesMenu.innerHTML = "Niños";
li4OpcionesMenu.innerHTML = "Ofertas";
burgerMenu.src = "./assets/header/iconBurgerMenu.png";
burgerMenu.alt = "menu-burger";
burgerMenu.classList.add("burgerMenu");
burgerMenu.addEventListener("click", () => {
  divMenu2.classList.toggle("openMenu");
});
iconFilter.src = "./assets/header/iconfilter.png";
iconFilter.alt = "icono-filtro";
iconFilter.addEventListener("click", () => {
  toggleFilters();
  filtersPlace.scrollIntoView({ behavior: "smooth" });
});


shoppingBasket.src = "./assets/header/iconShoppingBasket.png";
numberOfItemsSold.innerHTML = "";
shoppingBasket.alt = "carrito";
user.src = "./assets/header/iconUserAvatar.png";
user.alt = "avatar-user";

header.appendChild(menu);
menu.appendChild(logoMenu);
menu.appendChild(divOpcionesMenu);
menu.appendChild(divMenuIcons);
divOpcionesMenu.appendChild(ulOpcionesMenu);
divOpcionesMenu.appendChild(burgerMenu);
ulOpcionesMenu.appendChild(li1OpcionesMenu);
ulOpcionesMenu.appendChild(li2OpcionesMenu);
ulOpcionesMenu.appendChild(li3OpcionesMenu);
ulOpcionesMenu.appendChild(li4OpcionesMenu);
divMenuIcons.appendChild(iconFilter);
divMenuIcons.appendChild(divShoppingBasket);
divMenuIcons.appendChild(user);
divShoppingBasket.appendChild(shoppingBasket);
divShoppingBasket.appendChild(numberOfItemsSold);

const divMenu2 = document.createElement("div");
const ulMenu2 = document.createElement("ul");
const li1Menu2 = document.createElement("li");
const li2Menu2 = document.createElement("li");
const li3Menu2 = document.createElement("li");
const li4Menu2 = document.createElement("li");

divMenu2.id = "menu2";
li1Menu2.textContent = "Hombres";
li2Menu2.textContent = "Mujeres";
li3Menu2.textContent = "Niños";
li4Menu2.textContent = "Ofertas";
header.appendChild(divMenu2);
divMenu2.appendChild(ulMenu2);
ulMenu2.appendChild(li1Menu2);
ulMenu2.appendChild(li2Menu2);
ulMenu2.appendChild(li3Menu2);
ulMenu2.appendChild(li4Menu2);

const heroSection = document.createElement("section");
const divHeroSection = document.createElement("div");
const coverImg = document.createElement("img");
divHeroSection.classList.add("hero");
coverImg.src = "./assets/header/hero.jpg";
coverImg.alt = "hero-image";
divHeroSection.appendChild(coverImg);
heroSection.appendChild(divHeroSection);
main.appendChild(heroSection);

const filterSection = document.createElement("section");
const mainDivFilter = document.createElement("div");
const secondaryDivFilter = document.createElement("div");
const imgFilter = document.createElement("img");

imgFilter.src = "./assets/otros/iconArrowDownward.png";
secondaryDivFilter.appendChild(imgFilter);
imgFilter.addEventListener("click", toggleFilters);

mainDivFilter.id = "filtersPlace";

secondaryDivFilter.id = "filterToggle";
filterSection.appendChild(mainDivFilter);
filterSection.appendChild(secondaryDivFilter);
main.appendChild(filterSection);


const createArray = (array, param) => {
  const result = [];
  for (const element of array) {
    const elementoArray = element[param];
    if (!result.includes(elementoArray)) {
      result.push(elementoArray);
    }
  }
  return result;
};
const arrayMarcas = createArray(zapatillas, "marca");
const arrayModelos = createArray(zapatillas, "modelo");

const createSelect = (array, placeholder = "Todas las opciones") => {
  const select = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = placeholder;
  select.appendChild(defaultOption);
  for (const element of array) {
    const option = document.createElement("option");
    option.value = element;
    option.textContent = element;
    select.appendChild(option);
  }
  return select;
};

const selectBrands = createSelect(arrayMarcas, "Todas las marcas");
mainDivFilter.appendChild(selectBrands);

const inputMaxPrice = document.createElement("input");
inputMaxPrice.placeholder = "Precio Máximo";
mainDivFilter.appendChild(inputMaxPrice);

const filtrarButton = document.createElement("button");
filtrarButton.classList.add("filterButton");
filtrarButton.textContent = "Filtrar";
mainDivFilter.appendChild(filtrarButton);

const cleanButton = document.createElement("button");
cleanButton.classList.add("filterButton");
cleanButton.textContent = "Limpiar";
mainDivFilter.appendChild(cleanButton);

const h2Section = document.createElement("section");
const h2Suggestion = document.createElement("h2");
h2Section.id= "h2Section";
 h2Suggestion.textContent = "¡OH, NO! Lo sentimos, pero no hay ningún resultado disponible. No obstante, quizá te guste alguna de estas opciones disponibles 😉";
h2Section.appendChild(h2Suggestion);
main.appendChild(h2Section);

const zapasSection = document.createElement("section");
zapasSection.id = "zapas";
main.appendChild(zapasSection);

const printZapas = (zapas) => {
  zapasSection.innerHTML = "";

  for (const zapa of zapas) {
    const divCard = document.createElement("div");
    const divImg = document.createElement("div");
    const imgCard = document.createElement("img");
    const divInfoCard = document.createElement("div");
    const divTextCard = document.createElement("div");
    const divBrand = document.createElement("div");
    const textBrand = document.createElement("p");
    const divModelPrice = document.createElement("div");
    const textModel = document.createElement("p");
    const textPrice = document.createElement("p");
    const divButton = document.createElement("div");
    const buyButton = document.createElement("button");

    divCard.classList.add("card");
    divImg.classList.add("divCard");

    imgCard.src = zapa.imagen;
    imgCard.alt = zapa.modelo;
    textBrand.textContent = zapa.marca;
    textModel.textContent = zapa.modelo;
    textPrice.textContent = `${zapa.precio}€`;
    buyButton.textContent = "Comprar";

    buyButton.addEventListener("click", () => {
      let count = parseInt(numberOfItemsSold.textContent) || 0;
      count++;
      numberOfItemsSold.textContent = count;
      numberOfItemsSold.classList.add("shopping");
    });

    imgCard.addEventListener("click", () => {
      window.open(zapa.enlace, "_blank");
    });

    zapasSection.appendChild(divCard);
    divCard.appendChild(divImg);
    divCard.appendChild(divInfoCard);
    divImg.appendChild(imgCard);
    divInfoCard.appendChild(divTextCard);
    divInfoCard.appendChild(divButton);
    divTextCard.appendChild(divBrand);
    divTextCard.appendChild(divModelPrice);
    divBrand.appendChild(textBrand);
    divModelPrice.appendChild(textModel);
    divModelPrice.appendChild(textPrice);
    divButton.appendChild(buyButton);
  }
};

printZapas(zapatillas);

const filter = () => {
  const marcaSeleccionada = selectBrands.value;
  const valorMax = parseInt(inputMaxPrice.value);
  const filtered = [];

  for (const zapa of zapatillas) {
    const precioNum = parseInt(zapa.precio.replace("€", "").trim());

    if (
      (marcaSeleccionada === "" || marcaSeleccionada === zapa.marca) &&
      (isNaN(valorMax) || precioNum <= valorMax)
    ) {
      filtered.push(zapa);
    }
  }
 if (filtered.length > 0) {
    printZapas(filtered);
       h2Section.classList.remove("visible");
  } else {
    
h2Section.classList.add("visible");
    const randomZapas = [];

    while (randomZapas.length < 3 && randomZapas.length < zapatillas.length) {
      const randomElement = Math.floor(Math.random() * zapatillas.length);
      const randomItem = zapatillas[randomElement];
      if (!randomZapas.includes(randomItem)) {
        randomZapas.push(randomItem);
      }
    }
    printZapas(randomZapas);
  }
};


filtrarButton.addEventListener("click", () => {
  mainDivFilter.style.flexDirection = "row";
  filter();
});
cleanButton.addEventListener("click", () => {
  selectBrands.value = "";
  inputMaxPrice.value = "";
  h2Section.classList.remove("visible");
   mainDivFilter.style.flexDirection = "column";
  printZapas(zapatillas);
});




const footerItems = [
  {
    Title: "Compra con JD",
    pLink: ["Guía de tallas", "Buscador de tiendas", "Descuento estudiantes", "Calendario lanzamientos", "Inscribirte a JDX", "JD Blog"],
    Link: [
      "https://www.jdsports.es/customer-service/size-guide/",
      "https://www.jdsports.es/store-locator/all-stores/",
      "https://www.jdsports.es/page/student-discount/",
      "https://blog.jdsports.es/calendario-lanzamientos-sneakers/",
      "https://www.jdsports.es/page/jdx/",
      "https://blog.jdsports.es/"
    ]
  },
  {
    Title: "Atención al cliente",
    pLink: ["Preguntas frecuentes", "Envíos y devoluciones", "Seguimiento de envío", "Contacto"],
    Link: [
      "https://www.jdsports.es/page/faqs/",
      "https://www.jdsports.es/page/delivery-returns/",
      "https://www.jdsports.es/track-my-order/",
      "https://www.jdsports.es/customer-service/contact/"
    ]
  },
  {
    Title: "Aviso Legal",
    pLink: ["Términos y condiciones","Promociones y condiciones", "Política de privacidad", "Política de Cookies", "Ajustes de Cookies", "Accesibilidad"],
    Link: [
      "https://www.jdsports.es/customer-service/terms/",
      "https://www.jdsports.es/page/terminos-condiciones-promociones/",
      "https://www.jdsports.es/customer-service/privacy/",
      "https://www.jdsports.es/customer-service/cookies/",
      "https://www.jdsports.es/cart/#",
      "https://www.jdplc.com/accessibility/default.aspx"
    ]
  }
];

footerItems.forEach(divObject => {
  const divFooter = document.createElement("div");
  const ulFooter = document.createElement("ul");

  // Primer li con título
  const liTitle = document.createElement("li");
  const pTitle = document.createElement("p");
  pTitle.textContent = divObject.Title;
  liTitle.appendChild(pTitle);
  ulFooter.appendChild(liTitle);

  // Resto de li con enlaces
  divObject.pLink.forEach((text, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.setAttribute("href", divObject.Link[i]);
    li.appendChild(a);
    ulFooter.appendChild(li);
  });

  divFooter.appendChild(ulFooter);
  footer.appendChild(divFooter);
});


const div2Footer= document.createElement("div");
const ulDiv2Footer= document.createElement("ul");
const div3Footer= document.createElement("div");
const ulDiv3Footer= document.createElement("ul");