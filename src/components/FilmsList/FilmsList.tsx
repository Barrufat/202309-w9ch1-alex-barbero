import { useDispatch } from "react-redux";
import useFilmsApi from "../../hooks/useFilmsApi";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { RootState } from "../../store";

import { loadFilms } from "../../store/feature/films/filmsSlice";

const FilmsList = () => {
  const { getFilms } = useFilmsApi();
  const films = useAppSelector((state: RootState) => {
    return state.films.films;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentFilms = await getFilms();
      dispatch(loadFilms(currentFilms));
    })();
  }, [dispatch, getFilms]);

  return (
    <ul className="films">
      {films.map((film) => (
        <li className="film">
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
