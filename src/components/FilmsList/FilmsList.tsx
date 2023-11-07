import { FilmStructure } from "../../store/feature/films/types";
import FilmsListStyled from "./FilmsListStyled";

interface filmsProps {
  films: FilmStructure[];
}

const FilmsList = ({ films }: filmsProps) => {
  return (
    <FilmsListStyled>
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
    </FilmsListStyled>
  );
};

export default FilmsList;
