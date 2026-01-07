# 🎮 Pokédex Pixel Art - 151 Pokémon

Una Pokédex interactiva con diseño pixel art retro estilo GameBoy que muestra los 151 Pokémon originales de la primera generación. Incluye efectos 3D en las tarjetas, sonidos de Pokémon y conexión en tiempo real con la PokéAPI.

![Pokédex Preview](https://img.shields.io/badge/Pok%C3%A9mon-151-red?style=for-the-badge&logo=pokemon)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Características

- 🎨 **Diseño Pixel Art Retro**: Estética 8-bit inspirada en GameBoy y juegos arcade clásicos
- 🃏 **Efectos 3D**: Tarjetas con efecto tilt 3D interactivo al pasar el mouse
- 🔊 **Sonidos Originales**: Reproduce el grito de cada Pokémon al hacer clic
- 🌐 **API Real**: Conexión con [PokéAPI](https://pokeapi.co/) para datos actualizados
- 🔍 **Búsqueda Dinámica**: Filtra Pokémon por nombre en tiempo real
- 🏷️ **Filtros por Tipo**: 18 tipos diferentes de Pokémon (Fuego, Agua, Planta, etc.)
- 📱 **Responsive**: Diseño adaptable a móviles, tablets y desktop
- 🇪🇸 **Descripciones en Español**: Información oficial de cada Pokémon en español

## 🚀 Demo

Abre `index.html` en tu navegador favorito para ver la Pokédex en acción.

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar datos de la API y fuentes)

## 🛠️ Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/aymanebenkara/Aymane-PokedexAPI.git
   cd AymaneBenkara-Pokedex
   ```

2. **Abre el proyecto**:

   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local:

     ```bash
     # Con Python 3
     python -m http.server 8000

     # Con Node.js (npx)
     npx serve
     ```

3. **¡Disfruta!**:
   - Navega por los 151 Pokémon
   - Prueba los efectos 3D pasando el mouse sobre las tarjetas
   - Haz clic en las tarjetas para escuchar los gritos de los Pokémon

## 📁 Estructura del Proyecto

```
AymaneBenkara-Pokedex/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos pixel art y efectos 3D
├── js/
│   └── main.js         # Lógica de la aplicación y conexión API
├── .gitignore          # Archivos ignorados por Git
└── README.md           # Este archivo
```

## 🎯 Uso

### Búsqueda

Escribe el nombre de un Pokémon en la barra de búsqueda para filtrarlo instantáneamente.

### Filtros por Tipo

Haz clic en cualquier botón de tipo (Fuego 🔥, Agua 💧, Planta 🌿, etc.) para ver solo Pokémon de ese tipo.

### Efectos 3D

Mueve el mouse sobre cualquier tarjeta para ver el efecto de inclinación 3D con brillo dinámico.

### Sonidos

Haz clic en cualquier tarjeta de Pokémon para escuchar su grito característico.

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**:
  - Variables CSS para temas
  - Grid Layout para diseño responsive
  - Transformaciones 3D
  - Animaciones y transiciones
  - Fuente pixel art: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
- **JavaScript (ES6+)**:
  - Async/Await para peticiones API
  - Fetch API
  - DOM Manipulation
  - Event Listeners
- **PokéAPI**: API REST para datos de Pokémon

## 🎨 Tipos de Pokémon Soportados

| Tipo      | Emoji | Color         |
| --------- | ----- | ------------- |
| Planta    | 🌿    | Verde         |
| Fuego     | 🔥    | Naranja       |
| Agua      | 💧    | Azul          |
| Eléctrico | ⚡    | Amarillo      |
| Bicho     | 🐛    | Verde Lima    |
| Normal    | ⭐    | Gris          |
| Veneno    | ☠️    | Púrpura       |
| Tierra    | 🏜️    | Marrón        |
| Hada      | ✨    | Rosa          |
| Lucha     | 🥊    | Rojo          |
| Psíquico  | 🔮    | Rosa Oscuro   |
| Roca      | 🪨    | Gris Oscuro   |
| Fantasma  | 👻    | Lavanda       |
| Hielo     | ❄️    | Cian          |
| Dragón    | 🐉    | Índigo        |
| Acero     | ⚙️    | Plateado      |
| Siniestro | 🌙    | Marrón Oscuro |
| Volador   | 🦅    | Lavanda       |

## 📊 Características Técnicas

- **Carga Asíncrona**: Los 151 Pokémon se cargan en paralelo usando `Promise.all()`
- **Optimización de Rendimiento**:
  - `will-change` para animaciones suaves
  - `image-rendering: pixelated` para sprites retro
- **Manejo de Errores**: Gestión de errores de red y API
- **SEO Optimizado**: Meta tags para redes sociales y motores de búsqueda

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si quieres mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- [PokéAPI](https://pokeapi.co/) por proporcionar la API gratuita
- [Google Fonts](https://fonts.google.com/) por la fuente Press Start 2P
- Nintendo y Game Freak por crear Pokémon
- La comunidad de desarrolladores por inspiración y recursos

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
