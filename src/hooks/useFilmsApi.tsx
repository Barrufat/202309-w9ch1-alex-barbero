import { useCallback } from "react";

import { FilmStructure } from "../store/feature/films/types";

const useFilmsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getFilms = useCallback(async (): Promise<FilmStructure[]> => {
    const response = await fetch(`${apiUrl}/films`);
    const films = (await response.json()) as FilmStructure[];

    return films;
  }, [apiUrl]);

  const setWatchedFilms = useCallback(
    async (filmId: number, filmState: boolean): Promise<void> => {
      try {
        const response = await fetch(`${apiUrl}/films/${filmId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isWatched: !filmState }),
        });

        if (!response.ok) {
          throw new Error();
        }
      } catch {
        throw new Error();
      }
    },
    [apiUrl],
  );

  const addNewFilm = useCallback(
    async (newFilm: FilmStructure): Promise<void> => {
      try {
        const response = await fetch(`${apiUrl}/films`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFilm),
        });

        if (!response.ok) {
          throw new Error();
        }
      } catch {
        throw new Error();
      }
    },
    [apiUrl],
  );

  return {
    getFilms,
    setWatchedFilms,
    addNewFilm,
  };
};

export default useFilmsApi;
