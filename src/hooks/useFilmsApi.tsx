import { useCallback } from "react";

import { Film } from "../store/featrue/films/types";

const useFilmsApi = () => {
  const apiUrl = "https://movies-ebpz.onrender.com/films";

  const getUnicorns = useCallback(async () => {
    const response = await fetch(apiUrl);
    const unicorns = (await response.json()) as Film[];

    return unicorns;
  }, [apiUrl]);

  return {
    getUnicorns,
  };
};

export default useFilmsApi;
