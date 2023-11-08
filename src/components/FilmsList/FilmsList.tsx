import { useAppSelector } from "../../store/hooks";
import FilmCard from "../FilmCard.tsx/FilmCard";
import FilmsListStyled from "./FilmsListStyled";

const FilmsList = () => {
  const films = useAppSelector((state) => state.filmsState.films);
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
