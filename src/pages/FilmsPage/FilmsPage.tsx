import FilmsList from "../../components/FilmsList/FilmsList";

const FilmsPage = (): React.ReactElement => {
  return (
    <section className="films-box">
      <h2>Movies List</h2>
      <FilmsList />
    </section>
  );
};

export default FilmsPage;
