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

// Récupération des données du Soleil

function fetchData1() {
setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/SUN.jpeg"}, 200)
var affichagePlanete = document.querySelector("#plan");
var affichageDiam = document.querySelector("#diam");
var affichageMass = document.querySelector("#mass");
var affichageMoyenne = document.querySelector("#moyenne");
var affichageDecouverte = document.querySelector("#decouverte");
var affichageAtmos = document.querySelector("#atmos");
var affichageFaits = document.getElementById("faits");
var promise1 = fetch(
  "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");

promise1.then((response) => {
  console.log(response);
  const planete = response.json();
  console.log(planete);
  planete
    .then((data) => {
      const plan = 'Planete.......' + data.records[0].fields.planete_planet;
      console.log(plan);
      const diam = 'Diametre en km.......' + data.records[0].fields.diametre_diameter_km;
      console.log(diam);
      const mass = 'Masse en kg.......' + data.records[0].fields.masse_mass_x10_24_kg;
      console.log(mass);
      const moyenne = 'Temperature en C°.......' +
      data.records[0].fields.temperature_max_highest_temperature_degc;
      console.log(moyenne);
      const decouverte = 'Decouverte.......' + data.records[0].fields.decouverte_discovery;
      console.log(decouverte);
      const atmos = 'Atmosphere.......' + data.records[0].fields.atmospheric_composition;
      console.log(atmos);
      const faits = "Si le soleil disparaissait on ne le saurait pas avant 8 minutes.";
      //affichage
        affichagePlanete.innerHTML = plan;
        affichageDiam.innerHTML = diam;
        affichageMass.innerHTML = mass;
        affichageMoyenne.innerHTML = moyenne;
        affichageDecouverte.innerHTML = decouverte;
        affichageAtmos.innerHTML = atmos;
        affichageFaits.innerHTML = faits;
    }).catch((error) => {
      console.log(error);
    });
});
}

// Récupération des données de Mercure

function fetchData2() {
  const img = 
  setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/MERCURE.jpeg"}, 500)
  var affichagePlanete = document.querySelector("#plan");
  var affichageDiam = document.querySelector("#diam");
  var affichageMass = document.querySelector("#mass");
  var affichageMoyenne = document.querySelector("#moyenne");
  var affichageDecouverte = document.querySelector("#decouverte");
  var affichageAtmos = document.querySelector("#atmos");
  var affichageFaits = document.getElementById("faits");
  var promise1 = fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
  promise1.then((response) => {
    console.log(response);
    const planete = response.json();
    console.log(planete);
    planete
      .then((data) => {
        const plan = 'Planete.......' + data.records[1].fields.planete_planet;
        console.log(plan);
        const diam = 'Diametre en km.......' + data.records[1].fields.diametre_diameter_km;
        console.log(diam);
        const mass = 'Masse en kg.......' + data.records[1].fields.masse_mass_x10_24_kg;
        console.log(mass);
        const moyenne = 'Temperature en C°.......' +
          data.records[1].fields.temperature_moyenne_mean_temperature_degc;
        console.log(moyenne);
        const decouverte = 'Decouverte.......' + data.records[1].fields.decouverte_discovery;
        console.log(decouverte);
        const atmos = 'Atmosphere.......' + data.records[1].fields.atmospheric_composition;
        console.log(atmos);
        const faits = "Bien que ce soit la planète la plus proche du soleil, mercure n’est pas la plus chaude. Comme elle n’a presque pas d’atmosphère pour retenir la chaleur, sa surface subit les plus grandes variations de température de toutes les planètes.";
        //affichage
          affichagePlanete.innerHTML = plan;
          affichageDiam.innerHTML = diam;
          affichageMass.innerHTML = mass;
          affichageMoyenne.innerHTML = moyenne;
          affichageDecouverte.innerHTML = decouverte;
          affichageAtmos.innerHTML = atmos;
          affichageFaits.innerHTML = faits;
      }).catch((error) => {
        console.log(error);
      });
  });
  }

// Récupération des données de Mercure

function fetchData2() {
const img = 
setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/MERCURY.jpeg"}, 500)
var affichagePlanete = document.querySelector("#plan");
var affichageDiam = document.querySelector("#diam");
var affichageMass = document.querySelector("#mass");
var affichageMoyenne = document.querySelector("#moyenne");
var affichageDecouverte = document.querySelector("#decouverte");
var affichageAtmos = document.querySelector("#atmos");
var affichageFaits = document.getElementById("faits");
var promise1 = fetch(
  "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
promise1.then((response) => {
  console.log(response);
  const planete = response.json();
  console.log(planete);
  planete
    .then((data) => {
      const plan = 'Planete.......' + data.records[1].fields.planete_planet;
      console.log(plan);
      const diam = 'Diametre en km.......' + data.records[1].fields.diametre_diameter_km;
      console.log(diam);
      const mass = 'Masse en kg.......' + data.records[1].fields.masse_mass_x10_24_kg;
      console.log(mass);
      const moyenne = 'Temperature en C°.......' +
        data.records[1].fields.temperature_moyenne_mean_temperature_degc;
      console.log(moyenne);
      const decouverte = 'Decouverte.......' + data.records[1].fields.decouverte_discovery;
      console.log(decouverte);
      const atmos = 'Atmosphere.......' + data.records[1].fields.atmospheric_composition;
      console.log(atmos);
      const faits = "Bien que ce soit la planète la plus proche du soleil, mercure n’est pas la plus chaude. Comme elle n’a presque pas d’atmosphère pour retenir la chaleur, sa surface subit les plus grandes variations de température de toutes les planètes.";
      //affichage
        affichagePlanete.innerHTML = plan;
        affichageDiam.innerHTML = diam;
        affichageMass.innerHTML = mass;
        affichageMoyenne.innerHTML = moyenne;
        affichageDecouverte.innerHTML = decouverte;
        affichageAtmos.innerHTML = atmos;
        affichageFaits.innerHTML = faits;
      }).catch((error) => {
      console.log(error);
    });
});
}

// Récupération des données de Venus

function fetchData3() {
const img = 
setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/VENUS.jpeg"}, 500)
var affichagePlanete = document.querySelector("#plan");
var affichageDiam = document.querySelector("#diam");
var affichageMass = document.querySelector("#mass");
var affichageMoyenne = document.querySelector("#moyenne");
var affichageDecouverte = document.querySelector("#decouverte");
var affichageAtmos = document.querySelector("#atmos");
var affichageFaits = document.getElementById("faits");
var promise1 = fetch(
  "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
promise1.then((response) => {
  console.log(response);
  const planete = response.json();
  console.log(planete);
  planete
    .then((data) => {
      const plan = 'Planete.......' + data.records[2].fields.planete_planet;
      console.log(plan);
      const diam = 'Diametre en km.......' + data.records[2].fields.diametre_diameter_km;
      console.log(diam);
      const mass = 'Masse en kg.......' + data.records[2].fields.masse_mass_x10_24_kg;
      console.log(mass);
      const moyenne = 'Temperature en C°.......' +
        data.records[2].fields.temperature_moyenne_mean_temperature_degc;
      console.log(moyenne);
      const decouverte = 'Decouverte.......' + data.records[2].fields.decouverte_discovery;
      console.log(decouverte);
      const atmos = 'Atmosphere.......' + data.records[2].fields.atmospheric_composition;
      console.log(atmos);
      const faits = "Un jour sur Vénus dure quasi une année sur Terre (une année sur Vénus 243 jour terrestres)";
      //affichage
        affichagePlanete.innerHTML = plan;
        affichageDiam.innerHTML = diam;
        affichageMass.innerHTML = mass;
        affichageMoyenne.innerHTML = moyenne;
        affichageDecouverte.innerHTML = decouverte;
        affichageAtmos.innerHTML = atmos;
        affichageFaits.innerHTML = faits;
    }).catch((error) => {
      console.log(error);
    });
});
}

// Récupération des données de la Terre

function fetchData4() {
const img = 
setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/EARTH.jpeg"}, 500)
var affichagePlanete = document.querySelector("#plan");
var affichageDiam = document.querySelector("#diam");
var affichageMass = document.querySelector("#mass");
var affichageMoyenne = document.querySelector("#moyenne");
var affichageDecouverte = document.querySelector("#decouverte");
var affichageAtmos = document.querySelector("#atmos");
var affichageFaits = document.querySelector("faits");
var promise1 = fetch(
  "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
promise1.then((response) => {
  console.log(response);
  const planete = response.json();
  console.log(planete);
  planete
    .then((data) => {
      const plan = 'Planete.......' + data.records[3].fields.planete_planet;
      console.log(plan);
      const diam = 'Diametre en km.......' + data.records[3].fields.diametre_diameter_km;
      console.log(diam);
      const mass = 'Masse en kg.......' + data.records[3].fields.masse_mass_x10_24_kg;
      console.log(mass);
      const moyenne = 'Temperature en C°.......' +
        data.records[3].fields.temperature_moyenne_mean_temperature_degc;
      console.log(moyenne);
      const decouverte = 'Decouverte.......' + data.records[3].fields.decouverte_discovery;
      console.log(decouverte);
      const atmos = 'Atmosphere.......' + data.records[3].fields.atmospheric_composition;
      console.log(atmos);
      const faits = "106 milliards de personnes ont existé sur la planète Terre";
      //affichage
        affichagePlanete.innerHTML = plan;
        affichageDiam.innerHTML = diam;
        affichageMass.innerHTML = mass;
        affichageMoyenne.innerHTML = moyenne;
        affichageDecouverte.innerHTML = decouverte;
        affichageAtmos.innerHTML = atmos;
        affichageFaits.innerHTML = faits;
    }).catch((error) => {
      console.log(error);
    });
});
}

// Récupération des données de Mars

function fetchData5() {
  const img = 
  setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/MARS.jpeg"}, 500)
  var affichagePlanete = document.querySelector("#plan");
  var affichageDiam = document.querySelector("#diam");
  var affichageMass = document.querySelector("#mass");
  var affichageMoyenne = document.querySelector("#moyenne");
  var affichageDecouverte = document.querySelector("#decouverte");
  var affichageAtmos = document.querySelector("#atmos");
  var affichageAtmos = document.querySelector("faits");
  var promise1 = fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
  promise1.then((response) => {
    console.log(response);
    const planete = response.json();
    console.log(planete);
    planete
      .then((data) => {
        const plan = 'Planete.......' + data.records[4].fields.planete_planet;
        console.log(plan);
        const diam = 'Diametre en km.......' + data.records[4].fields.diametre_diameter_km;
        console.log(diam);
        const mass = 'Masse en kg.......' + data.records[4].fields.masse_mass_x10_24_kg;
        console.log(mass);
        const moyenne = 'Temperature en C°.......' +
          data.records[4].fields.temperature_moyenne_mean_temperature_degc;
        console.log(moyenne);
        const decouverte = 'Decouverte.......' + data.records[4].fields.decouverte_discovery;
        console.log(decouverte);
        const atmos = 'Atmosphere.......' + data.records[4].fields.atmospheric_composition;
        console.log(atmos);
        const faits = "Mars abrite la plus haute montagne du système solaire.";
        //affichage
          affichagePlanete.innerHTML = plan;
          affichageDiam.innerHTML = diam;
          affichageMass.innerHTML = mass;
          affichageMoyenne.innerHTML = moyenne;
          affichageDecouverte.innerHTML = decouverte;
          affichageAtmos.innerHTML = atmos;
          affichageFaits.innerHTML = faits;
      }).catch((error) => {
        console.log(error);
      });
  });
  }

// Récupération des données de Jupiter

function fetchData6() {
const img = 
setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/JUPITER.jpeg"}, 500)
var affichagePlanete = document.querySelector("#plan");
var affichageDiam = document.querySelector("#diam");
var affichageMass = document.querySelector("#mass");
var affichageMoyenne = document.querySelector("#moyenne");
var affichageDecouverte = document.querySelector("#decouverte");
var affichageAtmos = document.querySelector("#atmos");
var affichageAtmos = document.querySelector("faits");
var promise1 = fetch(
  "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
promise1.then((response) => {
  console.log(response);
  const planete = response.json();
  console.log(planete);
  planete
    .then((data) => {
      const plan = 'Planete.......' + data.records[5].fields.planete_planet;
      console.log(plan);
      const diam = 'Diametre en km.......' + data.records[5].fields.diametre_diameter_km;
      console.log(diam);
      const mass = 'Masse en kg.......' + data.records[5].fields.masse_mass_x10_24_kg;
      console.log(mass);
      const moyenne = 'Temperature en C°.......' +
        data.records[5].fields.temperature_moyenne_mean_temperature_degc;
      console.log(moyenne);
      const decouverte = 'Decouverte.......' + data.records[5].fields.decouverte_discovery;
      console.log(decouverte);
      const atmos = 'Atmosphere.......' + data.records[5].fields.atmospheric_composition;
      console.log(atmos);
      const faits = "Jupiter est la plus grande du système solaire. Son diamètre est dix fois celui de la Terre et son volume est tel qu’il pourrait contenir 1 321 Terres. Il y a des tempêtes et des cyclones sur Jupiter qui sont plus grands que notre planète entière.";
      //affichage
        affichagePlanete.innerHTML = plan;
        affichageDiam.innerHTML = diam;
        affichageMass.innerHTML = mass;
        affichageMoyenne.innerHTML = moyenne;
        affichageDecouverte.innerHTML = decouverte;
        affichageAtmos.innerHTML = atmos;
        affichageFaits.innerHTML = faits;
    }).catch((error) => {
      console.log(error);
    });
});
}

// Récupération des données de Saturne

function fetchData7() {
  const img = 
  setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/SATURNE1.jpeg"}, 500)
  var affichagePlanete = document.querySelector("#plan");
  var affichageDiam = document.querySelector("#diam");
  var affichageMass = document.querySelector("#mass");
  var affichageMoyenne = document.querySelector("#moyenne");
  var affichageDecouverte = document.querySelector("#decouverte");
  var affichageAtmos = document.querySelector("#atmos");
  var affichageAtmos = document.querySelector("faits");
  var promise1 = fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
  promise1.then((response) => {
    console.log(response);
    const planete = response.json();
    console.log(planete);
    planete
      .then((data) => {
        const plan = 'Planete.......' + data.records[6].fields.planete_planet;
        console.log(plan);
        const diam = 'Diametre en km.......' + data.records[6].fields.diametre_diameter_km;
        console.log(diam);
        const mass = 'Masse en kg.......' + data.records[6].fields.masse_mass_x10_24_kg;
        console.log(mass);
        const moyenne = 'Temperature en C°.......' +
          data.records[6].fields.temperature_moyenne_mean_temperature_degc;
        console.log(moyenne);
        const decouverte = 'Decouverte.......' + data.records[6].fields.decouverte_discovery;
        console.log(decouverte);
        const atmos = 'Atmosphere.......' + data.records[6].fields.atmospheric_composition;
        console.log(atmos);
        const faits = "Vus de loin, ses anneaux  semblent être formés d’une matière continue. En réalité, ils sont constitués de blocs de glace et de roches d’une taille variant entre celle d’un grain de sable et une dizaine de mètre.";
        //affichage
          affichagePlanete.innerHTML = plan;
          affichageDiam.innerHTML = diam;
          affichageMass.innerHTML = mass;
          affichageMoyenne.innerHTML = moyenne;
          affichageDecouverte.innerHTML = decouverte;
          affichageAtmos.innerHTML = atmos;
          affichageFaits.innerHTML = faits;
      }).catch((error) => {
        console.log(error);
      });
  });
  }

// Récupération des données de Uranus

function fetchData8() {
  const img = 
setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/URANUS.jpeg"}, 500)
var affichagePlanete = document.querySelector("#plan");
var affichageDiam = document.querySelector("#diam");
var affichageMass = document.querySelector("#mass");
var affichageMoyenne = document.querySelector("#moyenne");
var affichageDecouverte = document.querySelector("#decouverte");
var affichageAtmos = document.querySelector("#atmos");
var affichageAtmos = document.querySelector("faits");
var promise1 = fetch(
  "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
promise1.then((response) => {
  console.log(response);
  const planete = response.json();
  console.log(planete);
  planete
    .then((data) => {
      const plan = 'Planete.......' + data.records[7].fields.planete_planet;
      console.log(plan);
      const diam = 'Diametre en km.......' + data.records[7].fields.diametre_diameter_km;
      console.log(diam);
      const mass = 'Masse en kg.......' + data.records[7].fields.masse_mass_x10_24_kg;
      console.log(mass);
      const moyenne = 'Temperature en C°.......' +
        data.records[7].fields.temperature_moyenne_mean_temperature_degc;
      console.log(moyenne);
      const decouverte = 'Decouverte.......' + data.records[7].fields.decouverte_discovery;
      console.log(decouverte);
      const atmos = 'Atmosphere.......' + data.records[7].fields.atmospheric_composition;
      console.log(atmos);
      const faits = "C’est l’atmosphère planétaire la plus froide du système solaire, avec une température minimale de 49 K (-224,2 °C).";
      //affichage
        affichagePlanete.innerHTML = plan;
        affichageDiam.innerHTML = diam;
        affichageMass.innerHTML = mass;
        affichageMoyenne.innerHTML = moyenne;
        affichageDecouverte.innerHTML = decouverte;
        affichageAtmos.innerHTML = atmos;
        affichageFaits.innerHTML = faits;
    }).catch((error) => {
      console.log(error);
    });
});
}
// Récupération des données de Neptune

function fetchData9() {
  const img = 
  setTimeout(() => {document.getElementById("img-container").src = "NASA_picture/NEPTUNE.jpeg"}, 500)
  var affichagePlanete = document.querySelector("#plan");
  var affichageDiam = document.querySelector("#diam");
  var affichageMass = document.querySelector("#mass");
  var affichageMoyenne = document.querySelector("#moyenne");
  var affichageDecouverte = document.querySelector("#decouverte");
  var affichageAtmos = document.querySelector("#atmos");
  var affichageAtmos = document.querySelector("faits");
  var promise1 = fetch(
    "https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order");
  promise1.then((response) => {
    console.log(response);
    const planete = response.json();
    console.log(planete);
    planete
      .then((data) => {
        const plan = 'Planete.......' + data.records[8].fields.planete_planet;
        console.log(plan);
        const diam = 'Diametre en km.......' + data.records[8].fields.diametre_diameter_km;
        console.log(diam);
        const mass = 'Masse en kg.......' + data.records[8].fields.masse_mass_x10_24_kg;
        console.log(mass);
        const moyenne = 'Temperature en C°.......' +
          data.records[8].fields.temperature_moyenne_mean_temperature_degc;
        console.log(moyenne);
        const decouverte = 'Decouverte.......' + data.records[8].fields.decouverte_discovery;
        console.log(decouverte);
        const atmos = 'Atmosphere.......' + data.records[8].fields.atmospheric_composition;
        console.log(atmos);
        const faits = "Une saison sur Neptune est l’équivalent de 42 année sur Terre";
        //affichage
          affichagePlanete.innerHTML = plan;
          affichageDiam.innerHTML = diam;
          affichageMass.innerHTML = mass;
          affichageMoyenne.innerHTML = moyenne;
          affichageDecouverte.innerHTML = decouverte;
          affichageAtmos.innerHTML = atmos;
          affichageFaits.innerHTML = faits;
      }).catch((error) => {
        console.log(error);
      });
  });
}
