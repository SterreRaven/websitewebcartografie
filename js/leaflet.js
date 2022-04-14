var map = L.map('leaflet').setView([0, 0], 1);
L.tileLayer('https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}.png?key=nTenkvsXcUxOseVIciCJ', {
attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map); 

var marker = L.marker([59.334591, 18.063240]).addTo(map);
marker.bindPopup("<b>Sweden</b><br>Trail 1.").openPopup();

function zoomInOnClick(lat, lon){
    map.setView( [lat, lon], 14)
}

const geoJsonLayer = L.geoJSON().addTo(map);

fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=gem-5c097639bbdf06406298f301e8f4478b&fl=*')
    .then(response => response.json())
    .then(data => console.log
    (data.response.docs[0].
    geometrie_ll));


/* Arrey en loops

const arrayVanPlaatsnamen = ['Amsterdam', 'Soesterberg', 'Almere', 'Oss', 'Utrecht'];

for (let index = 0; index < arrayVanPlaatsnamen.length; index++) {
    const woonplaats = arrayVanPlaatsnamen [index];
    console.log(woonplaats)

    const node = document.createElement("button");

    node.className = "button"
    node.id = woonplaats;

    const textnode = document.createTextNode(woonplaats);
    node.appendChild(textnode);
    
    document.getElementById("header").appendChild(node);

    node.addEventListener('click', function(){
        console.log(node.id)

    fetch('https://geodata.nationaalgeoregister.nl/locatieserver/free?bq=type:woonplaats&q='+ id)
    .then(response => response.json())
    .then(data =>{
        const wkt = data.response.docs[0].geometrie_ll;
        
        
    })
    })
} */


