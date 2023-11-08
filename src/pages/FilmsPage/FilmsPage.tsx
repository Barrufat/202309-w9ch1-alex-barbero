import { useEffect } from "react";
import FilmsList from "../../components/FilmsList/FilmsList";
import useFilmsApi from "../../hooks/useFilmsApi";
import { useDispatch } from "react-redux";
import { loadMoviesActionCreator } from "../../store/feature/films/filmsSlice";

const FilmsPage = (): React.ReactElement => {
  const { getFilms } = useFilmsApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentFilms = await getFilms();

      dispatch(loadMoviesActionCreator(currentFilms));
    })();
  }, [dispatch, getFilms]);

  return (
    <section className="films-box">
      <h2>Movies List</h2>
      <FilmsList />
    </section>
  );
};

export default FilmsPage;
