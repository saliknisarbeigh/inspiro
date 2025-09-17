import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Person from "./pages/Person";
import Story from "./pages/Story";
import About from "./pages/About";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/person/:category/:person" element={<Person />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
