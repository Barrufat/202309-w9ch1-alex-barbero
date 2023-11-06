import { useCallback } from "react";

import { FilmStructure } from "../store/feature/films/types";

const useFilmsApi = () => {
  const apiUrl = "https://movies-ebpz.onrender.com/films";

  const getFilms = useCallback(async () => {
    const response = await fetch(apiUrl);
    const films = (await response.json()) as FilmStructure[];

    return films;
  }, [apiUrl]);

  return {
    getFilms,
  };
};

export default useFilmsApi;
