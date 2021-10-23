const text1_options = [
  "IBM Watson Assistant",
  "Toolchain IBM Cloud",
  "IBM Cloudant NoSQL",
  "IoT platform IBM Cloud",
  "Continuous Delivery"
];

const text2_options = [
  "Watson Assistant le permite crear interfaces de conversación en cualquier aplicación, dispositivo o canal. Añada una interfaz de lenguaje natural a la aplicación para automatizar las interacciones con los usuarios finales.",
  "Una cadena de herramientas es un conjunto de integraciones de herramientas que respaldan las tareas de desarrollo, implementación y operaciones. El poder colectivo de una cadena de herramientas es mayor que la suma de sus integraciones de herramientas individuales.",
  "IBM Cloudant es una base de datos de documentos JSON totalmente gestionada que ofrece un escalado independiente sin servidor de la capacidad de rendimiento y el almacenamiento aprovisionados.",
  "Este servicio es el concentrador de IBM IoT de todas las cosas, donde puede configurar y gestionar sus dispositivos conectados, de modo que sus aplicaciones puedan acceder a sus datos históricos y activos.",
  "Utilice Continuous Delivery para automatizar compilaciones, unificar pruebas, despliegues, etc. Cree cadenas de herramientas para habilitar las integraciones de herramientas que dan soporte a las tareas de desarrollo, despliegue y funcionamiento."
];

const color_options = ["#fff", "#fff", "#fff", "#fff", "#fff"];
const image_options = [
  "https://vcaperu.com/wp-content/uploads/2019/07/ibm-watson2-o4tvd7z712243mx4vupr2jn310horo30tj95gl_1c6b88244cd22af3dc443e5014478133.png",
  "data:image/png;base64,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",
  "https://uploads-ssl.webflow.com/5ad4c302a9ea3372eaea975f/5b996007b412b77e3b7d3f38_ibm%20cloudant.png",
  "https://www.altoros.com/blog/wp-content/uploads/2017/01/ibm-bluemix-internet-of-things-platform-catalog.png",
  "data:image/png;base64,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"
];

var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel1 = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel1.classList.add("anim-next");

  setTimeout(() => {
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  carousel1.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
  i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel1.classList.add("anim-previous");

  setTimeout(() => {
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  carousel1.classList.remove("anim-previous");
  }, 650);
};