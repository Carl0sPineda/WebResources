import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PostDetail from "./components/PostDetail";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<HomeTwo />} /> */}
          <Route path="/:id" element={<PostDetail />} />
          {/* <Route path="/post-2" element={<Post2 />} /> */}
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
};

export default App;
