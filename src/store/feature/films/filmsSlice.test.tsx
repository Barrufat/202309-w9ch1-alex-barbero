import { filmsReducer, loadMoviesActionCreator } from "./filmsSlice";
import { FilmStructure } from "./types";

describe("Given a loadMovies reducer", () => {
  describe("When it doesn't receive any film", () => {
    test("should show nothing", () => {
      expect(filmsReducer(undefined, { type: undefined })).toEqual({
        films: [],
      });
    });

    describe("When it receives the action to load 'Star Wars' to an empty list", () => {
      test("it should update films with the Star Wars film ", () => {
        const previousState: { films: FilmStructure[] } = { films: [] };

        expect(
          filmsReducer(
            previousState,
            loadMoviesActionCreator([
              { id: 1, Title: "Star Wars", Year: "2003", Images: ["atsseta"] },
            ]),
          ),
        ).toEqual({
          films: [
            { id: 1, Title: "Star Wars", Year: "2003", Images: ["atsseta"] },
          ],
        });
      });
    });

    describe("When it receives the action to load 'Superman' to a list of films with the Superman film in it", () => {
      test("it should update films with just with the Star Wars film", () => {
        const previousState: { films: FilmStructure[] } = {
          films: [
            { id: 1, Title: "Star Wars", Year: "2005", Images: ["Img1"] },
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
              },
            ]),
          ),
        ).toEqual({
          films: [{ id: 2, Title: "Superman", Year: "2003", Images: ["Img2"] }],
        });
      });
    });
  });
});
