import { useDispatch } from "react-redux";
import FilmForm from "../../components/FilmForm/FilmForm";
import { FilmStructure } from "../../store/feature/films/types";
import { addNewFilmActionCreator } from "../../store/feature/films/filmsSlice";
import { Link, useNavigate } from "react-router-dom";
import useFilmsApi from "../../hooks/useFilmsApi";

const FilmsPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { addNewFilm } = useFilmsApi();

  const addCurrentFilm = (newFilm: FilmStructure) => {
    addNewFilm(newFilm);
    dispatch(addNewFilmActionCreator(newFilm));

    navigate("/films");
  };

  return (
    <section className="films-box">
      <h2>Add a new Film</h2>
      <FilmForm submitAction={addCurrentFilm} />
      <Link className="link" to="/add">
        Go to Films
      </Link>
    </section>
  );
};

export default FilmsPage;
