var map = L.map('map').setView([0, 0], 1);
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
    geometrie_ll))

    function loaded(){
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Slovenian Mountain Trail', 'Müllerthal Trail','Laugavegur Trek', 'Alta Via 1', 'Kungsleden'],
            datasets: [{
                label: 'Kilometers',
                data: [500, 112, 54, 150, 440],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

    !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
      
    $(function() {
        $('.scroll-down').click (function() {
          $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
          return false;
        });
      });