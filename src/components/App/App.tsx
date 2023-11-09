import { Routes, Route, Navigate } from "react-router-dom";
import FilmsPage from "../../pages/FilmsPage/FilmsPage";
import AppStyled from "./AppStyled";
import FormPage from "../../pages/FilmsPage/FormPage";

const App = () => {
  return (
    <AppStyled>
      <h1>Movies App</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/add" element={<FormPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
