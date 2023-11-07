import { Routes, Route, Navigate } from "react-router-dom";
import FilmsPage from "../../pages/FilmsPage/FilmsPage";
import AppStyled from "./AppStyled";

const App = () => {
  return (
    <AppStyled>
      <h1>Movies App</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<FilmsPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
