import FilmForm from "../../components/FilmForm/FilmForm";

const FilmsPage = (): React.ReactElement => {
  return (
    <section className="films-box">
      <h2>Add a new Film</h2>
      <FilmForm />
    </section>
  );
};

export default FilmsPage;
