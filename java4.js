// Configuración del carrusel para cambiar cada 3 segundos
document.addEventListener("DOMContentLoaded", function () {
    const carousel = new bootstrap.Carousel(document.getElementById("carouselExample"), {
        interval: 3000, // Cambio de imagen cada 3 segundos
        wrap: true
    });
});

const cuentas = [
    {nombre: "HBO Max 1 pantalla", precio: "2 USD", imagen: "media/1.jpeg"},
    {nombre: "Crunchyroll 1 pantalla", precio: "2 USD", imagen: "media/crunchy.jpg"},
    {nombre: "Plex 1 pantalla", precio: "2.50 USD", imagen: "media/Plex-1.jpg.webp"},
    {nombre: "YouTube 1 mes", precio: "2.50 USD", imagen: "media/youtube.webp"},
    {nombre: "Prime Video 1 pantalla", precio: "2 USD", imagen: "media/6.jpeg"},
    {nombre: "Paramount 1 pantalla", precio: "2 USD", imagen: "media/paramount.webp"},
    {nombre: "Netflix 1 pantalla", precio: "2.50 USD", imagen: "media/3.jpeg"},
    {nombre: "Netflix 5 pantallas", precio: "10 USD", imagen: "media/netflix.jpg"},
    {nombre: "Paramount Plus 5 pantallas", precio: "4 USD", imagen: "media/paramount.webp"},
    {nombre: "HBO Max 5 pantallas", precio: "4 USD", imagen: "media/1.jpeg"},
    {nombre: "Crunchyroll cuenta completa", precio: "3 USD", imagen: "media/crunchy.jpg"},
    {nombre: "Prime Video 5 pantallas", precio: "4 USD", imagen: "media/6.jpeg"},
    {nombre: "Plex 5 pantallas", precio: "5 USD", imagen: "media/Plex-1.jpg.webp"},
    {nombre: "Vix Premium 1 pantalla", precio: "2 USD", imagen: "media/vix.webp"},
    {nombre: "Vix 5 pantallas", precio: "4 USD", imagen: "media/vix.webp"},
    {nombre: "Disney Plus 1 pantalla", precio: "3 USD", imagen: "media/disney.jpg"},
    {nombre: "IPTV Multicanales 1 pantalla", precio: "3 USD", imagen: "media/iptv.webp"},
    {nombre: "Spotify 1 mes", precio: "2 USD", imagen: "media/spotify.webp"}
];

const tarjetasContainer = document.getElementById("tarjetas-container");
cuentas.forEach(cuenta => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "col-md-4 mb-3";
    tarjeta.innerHTML = `
        <div class="card">
            <img src="${cuenta.imagen}" class="card-img-top" alt="${cuenta.nombre}">
            <div class="card-body">
                <h5 class="card-title">${cuenta.nombre}</h5>
                <p class="card-text">Precio: ${cuenta.precio}</p>
            </div>
        </div>
    `;
    tarjetasContainer.appendChild(tarjeta);
});


// Mostrar/ocultar botón de WhatsApp según el desplazamiento
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let whatsappBtn = document.getElementById("whatsapp");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        whatsappBtn.classList.add("hidden");
    } else {
        whatsappBtn.classList.remove("hidden");
    }
    lastScrollTop = scrollTop;
});
