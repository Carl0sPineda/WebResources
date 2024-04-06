import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./components/PostDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PostDetail />} />
          <Route
            path="*"
            element={
              <NotFound
                title="404"
                message="Página no encontrada"
                buttonText="Volver al inicio"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
