import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statements
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Home from "./pages/Home";

import RandomButton from "./components/button/RandomButton";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <main>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <RandomButton />
        <Button />
      </main>
    </Router>
  );
}

export default App;
