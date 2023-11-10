import { useState } from "react";
import FilmFormStyled from "./FilmFormStyled";
import { FilmStructure } from "../../store/feature/films/types";
import Button from "../Button/Button";

interface FilmFormProps {
  submitAction: (newFilm: FilmStructure) => void;
}

const FilmForm = ({ submitAction }: FilmFormProps) => {
  const initialFilm: FilmStructure = {
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
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitAction(newFilm);
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
        type="url"
        id="image"
        value={newFilm.image}
        onChange={updateNewFilm}
      />
      <Button type={"submit"} text={"Create new Film"} />
    </FilmFormStyled>
  );
};

export default FilmForm;
