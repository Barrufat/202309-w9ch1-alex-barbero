import { useDispatch } from "react-redux";
import FilmForm from "../../components/FilmForm/FilmForm";
import { FilmStructure } from "../../store/feature/films/types";
import { addNewFilmActionCreator } from "../../store/feature/films/filmsSlice";
import { useNavigate } from "react-router-dom";
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
    </section>
  );
};

export default FilmsPage;
