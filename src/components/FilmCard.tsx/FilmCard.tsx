import { useDispatch } from "react-redux";
import { FilmStructure } from "../../store/feature/films/types";
import Button from "../Button/Button";
import FilmCardStyled from "./FilmCardStyled";
import { toggleWatchedFilmsActionCreator } from "../../store/feature/films/filmsSlice";
import useFilmsApi from "../../hooks/useFilmsApi";

interface FilmCardProps {
  film: FilmStructure;
}

const FilmCard = ({ film }: FilmCardProps) => {
  const { setWatchedFilms } = useFilmsApi();
  const dispatch = useDispatch();

  const toggleCardIsWatched = async (id: number): Promise<void> => {
    dispatch(toggleWatchedFilmsActionCreator(id));
    await setWatchedFilms(id, film.isWatched);
  };

  return (
    <FilmCardStyled>
      <img
        className={`film__image ${film.isWatched ? "film__image-watched" : ""}`}
        src={film.Images[0]}
        alt={film.Title}
        width="300"
        height="199.175"
      />
      <div className="film__info">
        <Button
          type={"button"}
          title="isWatched-button"
          actionOnClick={() => {
            toggleCardIsWatched(film.id);
          }}
          text={`${film.isWatched ? "watched" : "unwatched"}`}
        />
        <div className="film__data-box">
          <h3 className="film__title">{film.Title}</h3>
          <span className="film__year">{film.Year}</span>
        </div>
      </div>
    </FilmCardStyled>
  );
};

export default FilmCard;
