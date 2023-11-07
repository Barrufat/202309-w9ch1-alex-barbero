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
          <img
            className="film__image"
            src={film.Images[0]}
            alt={film.Title}
            width="300"
            height="168.54"
          />
          <div className="film__info">
            <h3 className="film__title">{film.Title}</h3>
            <span className="film__year">{film.Year}</span>
          </div>
        </li>
      ))}
    </FilmsListStyled>
  );
};

export default FilmsList;
