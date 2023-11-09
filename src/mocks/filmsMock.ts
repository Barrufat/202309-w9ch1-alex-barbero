import { FilmStructure } from "../store/feature/films/types";

const filmsMock: FilmStructure[] = [
  {
    id: 1,
    isWatched: true,
    Title: "Avatar",
    Year: "2009",
    Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    ],
  },
  {
    id: 2,
    isWatched: false,
    Title: "I Am Legend",
    Year: "2007",
    Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
    ],
  },
];

export default filmsMock;
