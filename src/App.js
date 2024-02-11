import Header from "./components/header/Header";
import RandomButton from "./components/button/RandomButton";
import Start from "./pages/Start";
import ProjectList from "./components/projectBox/ProjectList";

import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Start />
      <RandomButton />
      <ProjectList />
    </main>
  );
}

export default App;
