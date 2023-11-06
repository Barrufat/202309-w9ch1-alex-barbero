import { useDispatch } from "react-redux";
import useFilmsApi from "../../hooks/useFilmsApi";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { RootState } from "../../store";

import { loadFilms } from "../../store/feature/films/filmsSlice";

const App = () => {
  const { getFilms } = useFilmsApi();
  const films = useAppSelector((state: RootState) => {
    return state.films;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadFilms(await getFilms()));
    })();
  }, [dispatch, getFilms, films]);

  return (
    <div className="main-container">
      <h1>Movies list</h1>
      <ul></ul>
    </div>
  );
};

export default App;
