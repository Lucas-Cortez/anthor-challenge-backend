import { PrismaClient, Movie } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

const MOVIES: Movie[] = [
  {
    movie_id: 1,
    title: "Castle in the Sky",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
    year: 1986,
    running_time: 124,
  },
  {
    movie_id: 2,
    title: "Grave of the Fireflies",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
    year: 1988,
    running_time: 89,
  },
  {
    movie_id: 3,
    title: "My Neighbor Totoro",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    year: 1988,
    running_time: 86,
  },
  {
    movie_id: 4,
    title: "Kiki's Delivery Service",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
    year: 1989,
    running_time: 102,
  },
  {
    movie_id: 5,
    title: "Only Yesterday",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg",
    year: 1991,
    running_time: 118,
  },
  {
    movie_id: 6,
    title: "Porco Rosso",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
    year: 1992,
    running_time: 93,
  },
  {
    movie_id: 7,
    title: "Pom Poko",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
    year: 1994,
    running_time: 119,
  },
  {
    movie_id: 8,
    title: "Whisper of the Heart",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5E3Hvbu0bg38ouYf6chGftVGqZ7.jpg",
    year: 1995,
    running_time: 111,
  },
  {
    movie_id: 9,
    title: "Princess Mononoke",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
    year: 1997,
    running_time: 134,
  },
  {
    movie_id: 10,
    title: "My Neighbors the Yamadas",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wTGuHmMIBBgKakY80J1D52VvQKI.jpg",
    year: 1999,
    running_time: 104,
  },
  {
    movie_id: 11,
    title: "Spirited Away",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    year: 2001,
    running_time: 124,
  },
  {
    movie_id: 12,
    title: "The Cat Returns",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg",
    year: 2002,
    running_time: 75,
  },
  {
    movie_id: 13,
    title: "Howl's Moving Castle",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg",
    year: 2004,
    running_time: 119,
  },
  {
    movie_id: 14,
    title: "Tales from Earthsea",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/67yYwCPq7NbxSF6BIIXCMD34sY0.jpg",
    year: 2006,
    running_time: 116,
  },
  {
    movie_id: 15,
    title: "Ponyo",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg",
    year: 2008,
    running_time: 100,
  },
  {
    movie_id: 16,
    title: "Arrietty",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oc2OB2KDmSRDMelKEAA1n4YRQL0.jpg",
    year: 2010,
    running_time: 94,
  },
  {
    movie_id: 17,
    title: "From Up on Poppy Hill",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rRLYX4RZIyloHSJwvZKAhphAjiB.jpg",
    year: 2011,
    running_time: 91,
  },
  {
    movie_id: 18,
    title: "The Wind Rises",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfwSexzlIzaOgxP9A8bTA6t8YYb.jpg",
    year: 2013,
    running_time: 126,
  },
  {
    movie_id: 19,
    title: "The Tale of the Princess Kaguya",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mWRQNlWXYYfd2z4FRm99MsgHgiA.jpg",
    year: 2013,
    running_time: 137,
  },
  {
    movie_id: 20,
    title: "When Marnie Was There",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg",
    year: 2014,
    running_time: 103,
  },
  {
    movie_id: 21,
    title: "The Red Turtle",
    image_url: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wOBU3SLjQ9358Km9YWYasPZyebp.jpg",
    year: 2016,
    running_time: 80,
  },
  {
    movie_id: 22,
    title: "Earwig and the Witch",
    image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sJhFtY3eHuvvACaPpxpzdCLQqpQ.jpg",
    year: 2021,
    running_time: 82,
  },
];

async function main() {
  await prisma.movie.createMany({ data: MOVIES });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
