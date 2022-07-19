// Récupération des données
btn1.onclick = 
function fetchData(){
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
            planet_name.textContent = data.records[0].fields.planete_planet;
            const img = document.createElement("img");
            img.src = data.records[0].fields.image.filename;
            output.appendChild(img);
        })
        .catch(error =>{
            console.log(error)});
    }
;
// Récupération des données
btn2.onclick = 
function fetchData(){
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
            
            planet_name.textContent = data.records[1].planete_planet;
            const img = document.createElement("img");
            img.src = data.records[0].fields.image.id.filename[0];
            output.appendChild(img);

        })
        .catch(error =>{
            console.log(error)});
    }
;


// Animations du menu défliant

/*const menuToogle = document.querySelector(selectors,'.toogle');*/