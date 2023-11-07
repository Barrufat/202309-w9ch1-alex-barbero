import { useEffect } from "react";
import FilmsList from "../../components/FilmsList/FilmsList";
import useFilmsApi from "../../hooks/useFilmsApi";
import { useDispatch } from "react-redux";
import { loadMoviesActionCreator } from "../../store/feature/films/filmsSlice";
import { useAppSelector } from "../../store/hooks";

const FilmsPage = (): React.ReactElement => {
  const films = useAppSelector((state) => state.filmsState.films);
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
      <FilmsList films={films} />
    </section>
  );
};

export default FilmsPage;
