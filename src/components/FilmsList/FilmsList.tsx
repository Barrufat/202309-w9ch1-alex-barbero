import { FilmStructure } from "../../store/feature/films/types";
import FilmCard from "../FilmCard.tsx/FilmCard";
import FilmsListStyled from "./FilmsListStyled";

interface filmsProps {
  films: FilmStructure[];
}

const FilmsList = ({ films }: filmsProps) => {
  return (
    <FilmsListStyled>
      {films.map((film) => (
        <li className="film" key={film.id}>
          <FilmCard film={film} />
        </li>
      ))}
    </FilmsListStyled>
  );
};

export default FilmsList;
