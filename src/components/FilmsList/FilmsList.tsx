import { FilmStructure } from "../../store/feature/films/types";

interface filmsProps {
  films: FilmStructure[];
}

const FilmsList = ({ films }: filmsProps) => {
  return (
    <ul className="films">
      {films.map((film) => (
        <li className="film" key={film.id}>
          <h3>{film.Title}</h3>
          <span>{film.Year}</span>
          <img
            src={film.Images[0]}
            alt={film.Title}
            width="300"
            height="168.54"
          />
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
