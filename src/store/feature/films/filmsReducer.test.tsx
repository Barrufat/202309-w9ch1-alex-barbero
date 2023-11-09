import {
  filmsReducer,
  loadMoviesActionCreator,
  toggleWatchedFilmActionCreator,
} from "./filmsSlice";
import { FilmStructure } from "./types";

describe("Given a filmsReducer", () => {
  describe("When it receives the action to load a film but doesn't receive any film", () => {
    test("should show nothing", () => {
      expect(filmsReducer(undefined, { type: undefined })).toEqual({
        films: [],
      });
    });
  });

  describe("When it receives the action to load 'Star Wars' to an empty list", () => {
    test("it should update films with the Star Wars film ", () => {
      const previousState: { films: FilmStructure[] } = { films: [] };

      expect(
        filmsReducer(
          previousState,
          loadMoviesActionCreator([
            {
              id: 1,
              Title: "Star Wars",
              Year: "2003",
              Images: ["atsseta"],
              isWatched: true,
            },
          ]),
        ),
      ).toEqual({
        films: [
          {
            id: 1,
            Title: "Star Wars",
            Year: "2003",
            Images: ["atsseta"],
            isWatched: true,
          },
        ],
      });
    });
  });

  describe("When it receives the action to load 'Superman' to a list of films with the Superman film in it", () => {
    test("it should update films with just with the Star Wars film", () => {
      const previousState: { films: FilmStructure[] } = {
        films: [
          {
            id: 1,
            Title: "Star Wars",
            Year: "2005",
            Images: ["Img1"],
            isWatched: true,
          },
        ],
      };

      expect(
        filmsReducer(
          previousState,
          loadMoviesActionCreator([
            {
              id: 2,
              Title: "Superman",
              Year: "2003",
              Images: ["Img2"],
              isWatched: true,
            },
          ]),
        ),
      ).toEqual({
        films: [
          {
            id: 2,
            Title: "Superman",
            Year: "2003",
            Images: ["Img2"],
            isWatched: true,
          },
        ],
      });
    });
  });

  describe("When it recieves an unwatched Star Wars film and the action to toggleWatchedFilm with it's id number", () => {
    test("it should update films with that film button with 'watched' in it", () => {
      const expectedState = {
        films: [
          {
            id: 1,
            Title: "Star Wars",
            Year: "2005",
            Images: ["Img1"],
            isWatched: true,
          },
        ],
      };
      const previousState: { films: FilmStructure[] } = {
        films: [
          {
            id: 1,
            Title: "Star Wars",
            Year: "2005",
            Images: ["Img1"],
            isWatched: false,
          },
        ],
      };

      const newFilmsState = filmsReducer(
        previousState,
        toggleWatchedFilmActionCreator(1),
      );

      expect(newFilmsState).toStrictEqual(expectedState);
    });
  });
});
