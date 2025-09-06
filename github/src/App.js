import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
