import { useDispatch } from "react-redux";
import useFilmsApi from "../../hooks/useFilmsApi";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { RootState } from "../../store";

import { loadFilms } from "../../store/feature/films/filmsSlice";

const App = () => {
  const { getFilms } = useFilmsApi();
  const films = useAppSelector((state: RootState) => {
    return state.films.films;
  });

  console.log(films);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentFilms = await getFilms();
      dispatch(loadFilms(currentFilms));
    })();
  }, [dispatch, getFilms]);

  return (
    <div className="main-container">
      <h1>Movies list</h1>
      <ul>
        {films.map((film) => (
          <li className="film">
            <h2>{film.Title}</h2>
            <span>{film.Year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
