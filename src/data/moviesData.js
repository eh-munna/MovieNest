export const moviesData = [
  {
    id: crypto.randomUUID(),
    name: 'Inception',
    price: 3.99,
    rating: 8.8,
    description:
      'A thief who steals corporate secrets through dream-sharing technology is given a task to plant an idea.',
    imgSource:
      'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'The Dark Knight',
    price: 4.49,
    rating: 9.0,
    description:
      'Batman faces the Joker, a criminal mastermind who brings chaos to Gotham City.',
    imgSource:
      'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Interstellar',
    price: 3.49,
    rating: 8.6,
    description:
      "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imgSource:
      'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'The Matrix',
    price: 2.99,
    rating: 8.7,
    description:
      'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
    imgSource:
      'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Parasite',
    price: 3.79,
    rating: 8.6,
    description:
      'Greed and class discrimination threaten the relationship between two families in this Oscar-winning film.',
    imgSource:
      'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'The Shawshank Redemption',
    price: 3.99,
    rating: 9.3,
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    imgSource:
      'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sonic the Hedgehog',
    price: 3.49,
    rating: 6.5,
    description:
      'After accidentally causing a massive power outage, Sonic must evade the government and team up with a small-town sheriff to stop the evil Dr. Robotnik from capturing him and using his powers for world domination.',
    imgSource:
      'https://image.tmdb.org/t/p/w500/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
  },
];

export default function getMovies() {
  return moviesData;
}
