import { useState } from "react";
import FilmFormStyled from "./FilmFormStyled";
import { FilmStructure } from "../../store/feature/films/types";

const FilmForm = () => {
  const initialFilm: FilmStructure = {
    id: 0,
    isWatched: false,
    title: "",
    year: "",
    image: "",
  };

  const [newFilm, setNewFilm] = useState<FilmStructure>(initialFilm);

  const updateNewFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((currentNewFilm) => ({
      ...currentNewFilm,
      [event.target.id]: event.target.value,
    }));

    console.log(newFilm);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Formulario enviado!");
  };

  return (
    <FilmFormStyled onSubmit={onFormSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        value={newFilm.title}
        onChange={updateNewFilm}
      />
      <label htmlFor="year">Year: </label>
      <input
        type="text"
        id="year"
        value={newFilm.year}
        onChange={updateNewFilm}
      />
      <label htmlFor="image">Image url: </label>
      <input
        type="text"
        id="image"
        value={newFilm.image}
        onChange={updateNewFilm}
      />
    </FilmFormStyled>
  );
};

export default FilmForm;
