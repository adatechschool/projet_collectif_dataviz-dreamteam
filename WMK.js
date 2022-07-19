// JavaScript code

function fetchData(){
    fetch("https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data&q=&sort=-ordre_order&facet=ordre_order&facet=type_d_astre_type_of_planet&facet=planete_planet&facet=decouverte_discovery&facet=distance_moyenne_average_distance_x10_6_km&facet=distance_moyenne_ua_average_distance_au&facet=aphelie_aphelion_x10_6_km&facet=aphelie_ua_aphelion_au&facet=perihelie_perihelion_x10_6_km&facet=perihelie_ua_perihelion_ua&facet=diametre_diameter_km&facet=diametre_terre_1_diameter_earth_1&facet=volume_terre_1_volume_earth_1&facet=masse_mass_x10_24_kg&facet=empty&facet=de_la_masse_totale_du_systeme_solaire&facet=densite_density_kg_m3&facet=gravite_gravity_m_s2&facet=vitesse_orbitale_orbital_velocity_km_s&facet=temperature_moyenne_mean_temperature_degc&facet=temperature_min_lowest_temperature_degc&facet=temperature_max_highest_temperature_degc&facet=nombre_de_satellites_number_of_satellites&facet=atmospheric_composition&facet=systeme_d_anneaux_ring_system&facet=champ_magnetique_global_global_magnetic_field")
        .then(
            function(response)
            {console.log(response);
            if (!response.ok){
                throw Error("ERROR");
            }
            return  response.json()})
        .then(
            data =>{
            console.table(data);
        })
        .catch(error =>{
            console.log(error)});
}



fetchData();