import { useCallback } from "react";

import { FilmStructure } from "../store/feature/films/types";

const useFilmsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getFilms = useCallback(async (): Promise<FilmStructure[]> => {
    const response = await fetch(apiUrl);
    const films = (await response.json()) as FilmStructure[];

    return films;
  }, [apiUrl]);

  return {
    getFilms,
  };
};

export default useFilmsApi;
