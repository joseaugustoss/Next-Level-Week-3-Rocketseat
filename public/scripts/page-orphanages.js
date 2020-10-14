// Create map
const map = L.map("mapid").setView([-13.7299531, -39.1437096], 16);

// Create and add tyleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
   iconUrl: "./public/images/map-marker.svg",
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2],
});

// Create popup overlay
const popup = L.popup({
   closeButton: false,
   className: "map-popup",
   minWidth: 240,
   minHeight: 240,
}).setContent('Lar das meninas <a a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" </a>');

// Create and add Marker
L.marker([-13.7299531, -39.1437096], {icon})
   .addTo(map)
   .bindPopup(popup )
   
