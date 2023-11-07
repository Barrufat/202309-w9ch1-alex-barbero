import { Routes, Route, Navigate } from "react-router-dom";
import FilmsPage from "../../pages/FilmsPage/FilmsPage";

const App = () => {
  return (
    <div className="main-container">
      <h1>Movies App</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<FilmsPage />} />
      </Routes>
    </div>
  );
};

export default App;
