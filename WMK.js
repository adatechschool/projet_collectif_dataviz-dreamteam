// Background Animation

"use strict";
var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
w = (canvas.width = window.innerWidth),
h = (canvas.height = window.innerHeight),
hue = 217,
stars = [],
count = 0,
maxStars = 1400;

// Cache gradient

var canvas2 = document.createElement("canvas"),
ctx2 = canvas2.getContext("2d");
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, "#fff");
gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
gradient2.addColorStop(1, "transparent");
ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

// End cache

function random(min, max) {
    if (arguments.length < 2) {
    max = min;
    min = 0;
    }
    if (min > max) {
    var hold = max;
    max = min;
    min = hold;
    }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function maxOrbit(x, y) {
    var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
}
var Star = function () {
    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 50000;
    this.alpha = random(2, 10) / 10;
    count++;
    stars[count] = this;
};
Star.prototype.draw = function () {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    twinkle = random(10);
    if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
    }
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(
    canvas2,
    x - this.radius / 2,
    y - this.radius / 2,
    this.radius,
    this.radius
    );
    this.timePassed += this.speed;
};
for (var i = 0; i < maxStars; i++) {
    new Star();
}
function animation() {
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
    }
    window.requestAnimationFrame(animation);
}

animation();



// Animations du menu défliant

function onCLickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg") ;  
}


// Récupération des données du soleil

function fetchData1(){
    fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
        .then(
            function(response)
            {console.log(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return  response.json()})
        .then(
            data =>{
            console.log(data.records[0].fields.planete_planet);
            console.log(data.records[0].fields.diametre_diameter_km)
            console.log(data.records[0].fields.masse_mass_x10_24_kg)
            console.log(data.records[0].fields.temperature_max_highest_temperature_degc)
            console.log(data.records[0].fields.decouverte_discovery)
            console.log(data.records[0].fields.atmospheric_composition);
            console.log(data.records[0].field);
            const img = document.createElement("img");
            img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[0].fields.image.id+'/300/';
            document.body.appendChild(img);
        })
        .catch(error =>{
            console.log(error)});
    }

// Récupération des données de Mercure

    function fetchData2(){
        fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
            .then(
                function(response)
                {console.log(response);
                if (!response.ok){
                    throw Error("ERROR");
                }
                return  response.json()})
            .then(
                data =>{
                console.log(data.records[1].fields.planete_planet);
                console.log(data.records[1].fields.diametre_diameter_km)
                console.log(data.records[1].fields.masse_mass_x10_24_kg)
                console.log(data.records[1].fields.temperature_max_highest_temperature_degc)
                console.log(data.records[1].fields.decouverte_discovery)
                console.log(data.records[1].fields.atmospheric_composition);
                const img = document.createElement("img");
                img.src = 'https://www.datastro.eu/explore/dataset/donnees-systeme-solaire-solar-system-data/files/'+data.records[1].fields.image.id+'/300/'
                document.body.appendChild(img);
            })
            .catch(error =>{
                console.log(error)});
        }

// Récupération des données de Venus

function fetchData3(){
    fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
        .then(
            function(response)
            {console.log(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return  response.json()})
        .then(
            data =>{
            console.log(data.records[2].fields.planete_planet);
            console.log(data.records[2].fields.diametre_diameter_km)
            console.log(data.records[2].fields.masse_mass_x10_24_kg)
            console.log(data.records[2].fields.temperature_max_highest_temperature_degc)
            console.log(data.records[2].fields.decouverte_discovery)
            console.log(data.records[2].fields.atmospheric_composition);
            //const img = document.createElement("img");
            //img.src = data.records[0].fields.image.filename;
            //output.appendChild(img);
        })
        .catch(error =>{
            console.log(error)});
    }

// Récupération des données de la Terre

function fetchData4(){
    fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
        .then(
            function(response)
            {console.log(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return  response.json()})
        .then(
            data =>{
            console.log(data.records[3].fields.planete_planet);
            console.log(data.records[3].fields.diametre_diameter_km)
            console.log(data.records[3].fields.masse_mass_x10_24_kg)
            console.log(data.records[3].fields.temperature_max_highest_temperature_degc)
            console.log(data.records[3].fields.decouverte_discovery)
            console.log(data.records[3].fields.atmospheric_composition);
            //const img = document.createElement("img");
            //img.src = data.records[0].fields.image.filename;
            //output.appendChild(img);
        })
        .catch(error =>{
            console.log(error)});
    }

// Récupération des données de Mars

    function fetchData5(){
        fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
            .then(
                function(response)
                {console.log(response);
                if (!response.ok){
                    throw Error("ERROR");
                }
                return  response.json()})
            .then(
                data =>{
                console.log(data.records[4].fields.planete_planet);
                console.log(data.records[4].fields.diametre_diameter_km)
                console.log(data.records[4].fields.masse_mass_x10_24_kg)
                console.log(data.records[4].fields.temperature_max_highest_temperature_degc)
                console.log(data.records[4].fields.decouverte_discovery)
                console.log(data.records[4].fields.atmospheric_composition);
                //const img = document.createElement("img");
                //img.src = data.records[0].fields.image.filename;
                //output.appendChild(img);
            })
            .catch(error =>{
                console.log(error)});
        }

// Récupération des données de Jupiter

function fetchData6(){
    fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
        .then(
            function(response)
            {console.log(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return  response.json()})
        .then(
            data =>{
            console.log(data.records[5].fields.planete_planet);
            console.log(data.records[5].fields.diametre_diameter_km)
            console.log(data.records[5].fields.masse_mass_x10_24_kg)
            console.log(data.records[5].fields.temperature_max_highest_temperature_degc)
            console.log(data.records[5].fields.decouverte_discovery)
            console.log(data.records[5].fields.atmospheric_composition);
            //const img = document.createElement("img");
            //img.src = data.records[0].fields.image.filename;
            //output.appendChild(img);
        })
        .catch(error =>{
            console.log(error)});
    }

// Récupération des données de Saturne

function fetchData7(){
    fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
        .then(
            function(response)
            {console.log(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return  response.json()})
        .then(
            data =>{
            console.log(data.records[6].fields.planete_planet);
            console.log(data.records[6].fields.diametre_diameter_km)
            console.log(data.records[6].fields.masse_mass_x10_24_kg)
            console.log(data.records[6].fields.temperature_moyenne_mean_temperature_degc)
            console.log(data.records[6].fields.decouverte_discovery)
            console.log(data.records[6].fields.atmospheric_composition);
            //const img = document.createElement("img");
            //img.src = data.records[0].fields.image.filename;
            //output.appendChild(img);
        })
        .catch(error =>{
            console.log(error)});
    }

// Récupération des données de 

function fetchData8(){
    fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
        .then(
            function(response)
            {console.log(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return  response.json()})
        .then(
            data =>{
            console.log(data.records[7].fields.planete_planet);
            console.log(data.records[7].fields.diametre_diameter_km)
            console.log(data.records[7].fields.masse_mass_x10_24_kg)
            console.log(data.records[7].fields.temperature_moyenne_mean_temperature_degc)
            console.log(data.records[7].fields.decouverte_discovery)
            console.log(data.records[7].fields.atmospheric_composition);
            //const img = document.createElement("img");
            //img.src = data.records[0].fields.image.filename;
            //output.appendChild(img);
        })
        .catch(error =>{
            console.log(error)});
    }

// Récupération des données de la Lune

function fetchData9(){
    fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&rows=9&sort=-ordre_order")
        .then(
            function(response)
            {console.log(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return  response.json()})
        .then(
            data =>{
            console.log(data.records[8].fields.planete_planet);
            console.log(data.records[8].fields.diametre_diameter_km)
            console.log(data.records[8].fields.masse_mass_x10_24_kg)
            console.log(data.records[8].fields.temperature_moyenne_mean_temperature_degc)
            console.log(data.records[8].fields.decouverte_discovery)
            console.log(data.records[8].fields.atmospheric_composition);
            //const img = document.createElement("img");
            //img.src = data.records[0].fields.image.filename;
            //output.appendChild(img);
        })
        .catch(error =>{
            console.log(error)});
    }