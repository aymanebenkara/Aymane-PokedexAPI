/*
 * PROYECTO POKÉDEX - JAVASCRIPT AVANZADO
 * Conexión a PokéAPI + Efectos 3D
 */

document.addEventListener("DOMContentLoaded", async function () {
    const pokedexContainer = document.getElementById("pokedex");
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const noResults = document.getElementById("noResults");

    let allPokemons = [];
    let currentTypeFilter = "all";

    // Mapa de tipos Inglés -> Español para coincidir con el CSS
    const typeTranslation = {
        grass: "Planta",
        fire: "Fuego",
        water: "Agua",
        bug: "Bicho",
        normal: "Normal",
        poison: "Veneno",
        electric: "Eléctrico",
        ground: "Tierra",
        fairy: "Hada",
        fighting: "Lucha",
        psychic: "Psíquico",
        rock: "Roca",
        ghost: "Fantasma",
        ice: "Hielo",
        dragon: "Dragón",
        steel: "Acero",
        dark: "Siniestro",
        flying: "Volador"
    };

    /*
     * 1. OBTENER DATOS DE LA API
     */
    async function fetchPokemons() {
        try {
            // Mostramos un 'loading' o simplemente esperamos
            // Para hacerlo más rápido, usamos Promise.all
            const promises = [];
            for (let i = 1; i <= 151; i++) {
                promises.push(
                    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                        .then(res => res.json())
                        .then(async data => {
                            const typeEn = data.types[0].type.name;
                            const typeEs = typeTranslation[typeEn] || typeEn;

                            // Obtener descripción real del endpoint species
                            let descripcion = `Un Pokémon de tipo ${typeEs}.`;
                            try {
                                const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
                                const speciesData = await speciesRes.json();

                                // Buscar descripción en español
                                const spanishEntry = speciesData.flavor_text_entries.find(
                                    entry => entry.language.name === 'es'
                                );

                                if (spanishEntry) {
                                    // Limpiar saltos de línea y caracteres especiales
                                    descripcion = spanishEntry.flavor_text.replace(/\n|\f/g, ' ');
                                }
                            } catch (err) {
                                console.log(`No se pudo cargar descripción para ${data.name}`);
                            }

                            return {
                                id: data.id,
                                nombre: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                                tipo: typeEs,
                                tipoOriginal: typeEn,
                                imagen: data.sprites.front_default,
                                nivel: Math.floor(Math.random() * 100) + 1,
                                stats: data.stats,
                                descripcion: descripcion,
                                cry: data.cries?.latest || data.cries?.legacy || null
                            };
                        })
                );
            }

            allPokemons = await Promise.all(promises);

            console.log("✅ 151 Pokémon cargados");
            renderPokemons(allPokemons);
        } catch (error) {
            console.error("Error cargando Pokémon:", error);
            pokedexContainer.innerHTML = "<p style='color:white;'>Error al cargar la Pokédex. Intenta recargar.</p>";
        }
    }

    /*
     * 2. RENDERIZAR TARJETAS
     */
    function renderPokemons(list) {
        pokedexContainer.innerHTML = "";

        if (list.length === 0) {
            noResults.classList.remove("hidden");
            return;
        }
        noResults.classList.add("hidden");

        list.forEach(pokemon => {
            const card = document.createElement("div");

            // Ajustamos la clase para que coincida con el CSS existente (ej: card-Fuego)
            // Si el tipo no está en el CSS, usará solo .pokemon-card y fondo default (blanco)
            const typeClass = `card-${pokemon.tipo}`;

            card.className = `pokemon-card ${typeClass}`;

            // Estructura interna
            card.innerHTML = `
                <div class="card-glare"></div> <!-- Efecto brillo -->
                <div class="card-content">
                    <div class="card-header">
                        <span class="pokemon-number">#${pokemon.id.toString().padStart(3, '0')}</span>
                        <span class="pokemon-level">Nv. ${pokemon.nivel}</span>
                    </div>
                    <div class="card-image-container">
                        <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
                    </div>
                    <div class="card-info">
                        <h2>${pokemon.nombre}</h2>
                        <span class="type-badge type-${pokemon.tipo}">${pokemon.tipo}</span>
                        <p class="description">${pokemon.descripcion}</p>
                    </div>
                </div>
                ${pokemon.cry ? `<audio class="pokemon-cry" preload="auto"><source src="${pokemon.cry}" type="audio/ogg"></audio>` : ''}
            `;

            pokedexContainer.appendChild(card);

            // Añadir evento 3D individualmente
            add3DEffect(card);
        });
    }

    /*
     * 3. EFECTO 3D TILT + SONIDO
     */
    function add3DEffect(card) {
        // Reproducir sonido al HACER CLICK en la tarjeta
        card.addEventListener("click", () => {
            const audio = card.querySelector(".pokemon-cry");
            if (audio) {
                audio.volume = 0.4; // Volumen al 40%
                audio.currentTime = 0; // Reiniciar desde el principio
                audio.play().catch(err => {
                    console.log("Audio bloqueado por el navegador");
                });
            }
        });

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calcular rotación (máximo +/- 20 grados)
            const xPct = x / rect.width;
            const yPct = y / rect.height;

            const xRot = (0.5 - yPct) * 20; // Invertido eje Y
            const yRot = (xPct - 0.5) * 20; // Eje X

            card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.05)`;

            // Efecto Glare (Brillo)
            const glare = card.querySelector(".card-glare");
            if (glare) {
                glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`;
                glare.style.opacity = "1";
            }
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
            const glare = card.querySelector(".card-glare");
            if (glare) {
                glare.style.opacity = "0";
            }
        });
    }

    /*
     * 4. FILTRADO
     */
    function filterPokemons() {
        const searchTerm = searchInput.value.toLowerCase();

        const filtered = allPokemons.filter(pokemon => {
            const matchesSearch = pokemon.nombre.toLowerCase().includes(searchTerm);
            // El filtro por tipo en HTML es en Español (data-type="Fuego"), 
            // el pokemon.tipo ya lo convertimos a Español.
            const matchesType = currentTypeFilter === "all" || pokemon.tipo === currentTypeFilter;
            return matchesSearch && matchesType;
        });

        renderPokemons(filtered);
    }

    // Event Listeners
    searchInput.addEventListener("input", filterPokemons);

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentTypeFilter = btn.getAttribute("data-type");
            filterPokemons();
        });
    });

    // Iniciar
    console.log("Cargando Pokedex...");
    fetchPokemons();
});
