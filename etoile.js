//reference du canvas
const canvas = document.getElementById("stars");

//acces a tous les drawing fonctions
const ctx = canvas.getContext("2d");

//variable utilisée plus tard dans le programme
var screen, starArr;

//parametre objet qui controle les propriétés de l'animation
var params = { speed: 3, count: 600, life: 3 };

//appel des fonctions plus bas
setup();
update();

//setup fonction quand l'utilisateur joue avec l'ecran
window.onresize = function () {
setup();
};

//la fonction etoile qui fonctionne comme un construteur pour les objets etoiles
function Star() {
  //random position avc la largeur du canvas
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.z = Math.random() * canvas.width;

  //declaration fonction mouvement du canvas
  //soustraction du parametre de la vitesse avec la position z
  this.move = function () {
    this.z -= params.speed;

    //si les etoiles sortent du canvas on repositionne
    if (this.z <= 0) {
      this.z = canvas.width;
    }
  };

  //fonction qui montre les etoiles
  this.show = function () {
  
  //declaration de variable

    let x, y, radius, opacity;

    radius = canvas.width / this.z;

    //screen.c = [window.innerWidth * 0.5, window.innerHeight * 0.5];

    //declaration de la position x qu'on va soustraire a la moitie de l ecran provenant de la precedente pos de x multi par le radius
    x = (this.x - screen.c[0]) * radius;

    x = x + screen.c[0];

    y = (this.y - screen.c[1]) * radius;

    y = y + screen.c[1];

    //soft fading effect as the stars cones towards
    opacity = radius > params.life ? (2 - radius / params.life) * 1.5 : 1;

    //pour dessiner dans le canvas besoin d un context qui commence path method to draw path
    ctx.beginPath();
    //ctx.fillStyle = "rgba(11,18,167," + opacity + ")";
    ctx.fillStyle = "rgba(255,255,255," + opacity + ")";

    //circulaire path
    ctx.arc(x, y, radius, 0, Math.PI * 2);

    //fill the path with color
    ctx.fill();

    //screen.c = [window.innerWidth * 0.5, window.innerHeight * 0.5]
  };
}

//set up canvas et creation d etoiles

function setup() {
  screen = {
    w: window.innerWidth,
    h: window.innerHeight,
    c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
  };

  //cancel frame method to cancel the current animation
  window.cancelAnimationFrame(update);

  canvas.width = screen.w;
  canvas.height = screen.h;

  //tableau vide d'etoiles

  starArr = [];

  for (var i = 0; i < params.count; i++) {
    starArr[i] = new Star();
  }
}

//fonction pour montrer et bouger les etoiles
function update() {
  //background noir
  ctx.fillStyle = "black";

  //position du rectangle
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  starArr.forEach(function (s) {
    s.show();
    s.move();
  });

  //requete animation methode pour le rendu de toute l animation
  window.requestAnimationFrame(update);
}

// Animations du menu défliant
function onCLickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

function fetchData1() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[0].fields.planete_planet);
      console.log(data.records[0].fields.diametre_diameter_km);
      console.log(data.records[0].fields.masse_mass_x10_24_kg);
      console.log(data.records[0].fields.temperature_max_highest_temperature_degc);
      console.log(data.records[0].fields.decouverte_discovery);
      console.log(data.records[0].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[0].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
// Récupération des données de Mercure
function fetchData2() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[1].fields.planete_planet);
      console.log(data.records[1].fields.diametre_diameter_km);
      console.log(data.records[1].fields.masse_mass_x10_24_kg);
      console.log(
        data.records[1].fields.temperature_max_highest_temperature_degc
      );
      console.log(data.records[1].fields.decouverte_discovery);
      console.log(data.records[1].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[1].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
// Récupération des données de Venus
function fetchData3() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[2].fields.planete_planet);
      console.log(data.records[2].fields.diametre_diameter_km);
      console.log(data.records[2].fields.masse_mass_x10_24_kg);
      console.log(
        data.records[2].fields.temperature_max_highest_temperature_degc
      );
      console.log(data.records[2].fields.decouverte_discovery);
      console.log(data.records[2].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[2].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
// Récupération des données de la Terre
function fetchData4() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[3].fields.planete_planet);
      console.log(data.records[3].fields.diametre_diameter_km);
      console.log(data.records[3].fields.masse_mass_x10_24_kg);
      console.log(
        data.records[3].fields.temperature_max_highest_temperature_degc
      );
      console.log(data.records[3].fields.decouverte_discovery);
      console.log(data.records[3].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[3].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
// Récupération des données de Mars
function fetchData5() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[4].fields.planete_planet);
      console.log(data.records[4].fields.diametre_diameter_km);
      console.log(data.records[4].fields.masse_mass_x10_24_kg);
      console.log(
        data.records[4].fields.temperature_max_highest_temperature_degc
      );
      console.log(data.records[4].fields.decouverte_discovery);
      console.log(data.records[4].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[4].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
// Récupération des données de Jupiter

function fetchData6() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[5].fields.planete_planet);
      console.log(data.records[5].fields.diametre_diameter_km);
      console.log(data.records[5].fields.masse_mass_x10_24_kg);
      console.log(
        data.records[5].fields.temperature_max_highest_temperature_degc
      );
      console.log(data.records[5].fields.decouverte_discovery);
      console.log(data.records[5].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[5].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
// Récupération des données de Saturne
function fetchData7() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[6].fields.planete_planet);
      console.log(data.records[6].fields.diametre_diameter_km);
      console.log(data.records[6].fields.masse_mass_x10_24_kg);
      console.log(
        data.records[6].fields.temperature_moyenne_mean_temperature_degc
      );
      console.log(data.records[6].fields.decouverte_discovery);
      console.log(data.records[6].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[6].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
// Récupération des données de
function fetchData8() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[7].fields.planete_planet);
      console.log(data.records[7].fields.diametre_diameter_km);
      console.log(data.records[7].fields.masse_mass_x10_24_kg);
      console.log(
        data.records[7].fields.temperature_moyenne_mean_temperature_degc
      );
      console.log(data.records[7].fields.decouverte_discovery);
      console.log(data.records[7].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[7].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
// Récupération des données de la Lune
function fetchData9() {
  fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order"
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.records[8].fields.planete_planet);
      console.log(data.records[8].fields.diametre_diameter_km);
      console.log(data.records[8].fields.masse_mass_x10_24_kg);
      console.log(
        data.records[8].fields.temperature_moyenne_mean_temperature_degc
      );
      console.log(data.records[8].fields.decouverte_discovery);
      console.log(data.records[8].fields.atmospheric_composition);
      const img = document.getElementById("img-container");
      img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[8].fields.image.id+'/300/'
    })
    .catch((error) => {
      console.log(error);
    });
}
