import peliculas from './peliculas.js'

// Función para filtrar películas por género y agregarlas al DOM
function mostrarPeliculasPorGenero(generoId, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));
    
    peliculasFiltradas.forEach(pelicula => {
        const peliculaElemento = document.createElement("div");
        peliculaElemento.classList.add("pelicula");
        
        const imagen = document.createElement("img");
        imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
        imagen.alt = pelicula.title;
        
        const titulo = document.createElement("h3");
        titulo.textContent = pelicula.title;
        
        peliculaElemento.appendChild(imagen);
        peliculaElemento.appendChild(titulo);
        contenedor.appendChild(peliculaElemento);
    });
}

// Ejecutar las funciones para cada género
mostrarPeliculasPorGenero(28, "genero-28"); // Acción
mostrarPeliculasPorGenero(53, "genero-53"); // Thriller
mostrarPeliculasPorGenero(12, "genero-12"); // Aventura
