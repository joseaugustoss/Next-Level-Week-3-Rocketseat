const options = {
   ddragging: false,
   touchZoom: false,
   scrollWheelZoom: false,
   doubleClickZoom: false,
   zoomControl: false,
};
// Create map
const map = L.map("mapid", options).setView([-13.7299531, -39.1437096], 16);

// Create and add tyleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
   iconUrl: "./public/images/map-marker.svg",
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2],
});

// Create and add Marker
L.marker([-13.7299531, -39.1437096], { icon }).addTo(map);

// Image gallery
function selectImage(event) {
   const button = event.currentTarget;


   // remover todas as classes .active
   const buttons = document.querySelectorAll(".images button");
   // buttons.forEach(() => {
   //    button.classList.remove("active");
   // });
   buttons.forEach(removeActiveClass);

   function removeActiveClass(button) {
      button.classList.remove("active");
   }

   // selecionar image clicada
   const image = button.children[0];
   const imageContainer = document.querySelector(".orphanage-details > img ");

   // atualizar o container de image
   imageContainer.src = image.src;

   // adicionar a class .active para o botao clicado
   button.classList.add("active");
}
