var map = L.map('map').setView([0, 0], 1);
            L.tileLayer('https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}.png?key=nTenkvsXcUxOseVIciCJ', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            }).addTo(map);
