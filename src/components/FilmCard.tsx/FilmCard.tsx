import { FilmStructure } from "../../store/feature/films/types";
import FilmCardStyled from "./FilmCardStyled";

interface FilmCardProps {
  film: FilmStructure;
}

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <FilmCardStyled>
      <img
        className="film__image"
        src={film.Images[0]}
        alt={film.Title}
        width="300"
        height="199.175"
      />
      <div className="film__info">
        <h3 className="film__title">{film.Title}</h3>
        <span className="film__year">{film.Year}</span>
      </div>
    </FilmCardStyled>
  );
};

export default FilmCard;
