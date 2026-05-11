export const movies = [
  {
    id: 1,
    title: "Michael",
    genre: "Ciencia Ficción",
    price: 6.990,
    imageSrc: "/Michael.jpg",
    bannerSrc: "/MichaelCarrusel.webp",
    horarios: [
      { hora: 16, minuto: 30 },
      { hora: 21, minuto: 0 },
    ],
    description:
      "Una aventura de ciencia ficción cargada de tensión, misterio y visuales impactantes.",
    actors: ["Michael B. Jordan", "Zendaya", "John David Washington"],
  },
  {
    id: 2,
    title: "El diablo viste a la moda",
    genre: "Drama",
    price: 7.990,
    imageSrc: "/ElDiabloVisteALaModa.jpg",
    bannerSrc: "/DiabloVisteCarrusel.webp",
    horarios: [
      { hora: 15, minuto: 0 },
      { hora: 20, minuto: 15 },
    ],
    description:
      "Un drama elegante y agudo sobre la ambición, la moda y las decisiones que cambian una carrera.",
    actors: ["Meryl Streep", "Anne Hathaway", "Emily Blunt"],
  },
  {
    id: 3,
    title: "Ovejas Detectives",
    genre: "Drama",
    price: 4.990,
    imageSrc: "/OvejasDetectives.jpg",
    bannerSrc: "/OvejasCarrusel.webp",
    horarios: [
      { hora: 14, minuto: 45 },
      { hora: 19, minuto: 30 },
    ],
    description:
      "Una historia divertida y distinta donde un grupo de ovejas resuelve un misterio inesperado.",
    actors: ["Emma Stone", "Ryan Reynolds", "Pedro Pascal"],
  }
];

export const featuredSlides = [
  {
    id: 1,
    imageSrc: "/DetectiveOvejaCarrusel.webp",
    background: "linear-gradient(115deg, #0f5bd7 0%, #38bdf8 20%)",
  },
  {
    id: 2,
    imageSrc: "/MichaelCarrusel.webp",
    background: "linear-gradient(115deg, #0f5bd7 0%, #38bdf8 20%)",
  },
  {
    id: 3,
    imageSrc: "/DiabloVisteModaCarrusel.webp",
    background: "linear-gradient(115deg, #0f5bd7 0%, #38bdf8 20%)",
  }
];

