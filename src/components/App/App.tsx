import { Routes, Route, Navigate } from "react-router-dom";
import FilmsPage from "../../pages/FilmsPage/FilmsPage";
import AppStyled from "./AppStyled";
import FilmForm from "../FilmForm/FilmForm";

const App = () => {
  return (
    <AppStyled>
      <h1>Movies App</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/form" element={<FilmForm />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
