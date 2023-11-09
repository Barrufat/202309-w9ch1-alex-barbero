import { useEffect } from "react";
import FilmsList from "../../components/FilmsList/FilmsList";
import useFilmsApi from "../../hooks/useFilmsApi";
import { useDispatch } from "react-redux";
import { loadMoviesActionCreator } from "../../store/feature/films/filmsSlice";
import { Link } from "react-router-dom";

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
      <Link className="link" to="/add">
        Create new Film
      </Link>
      <FilmsList />
    </section>
  );
};

export default FilmsPage;
