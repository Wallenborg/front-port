import Header from "./components/header/Header";
import RandomButton from "./components/button/RandomButton";
import Start from "./pages/Start";
import ProjectList from "./components/projectBox/ProjectList";
import Footer from "./components/footer/Footer";
import Arrow from "./components/arrow/Arrow";
import IconMarquee from "./components/iconMarquee/IconMarquee";

import "./App.css";

function App() {
  return (
    <main className="box-main">
      <Header />
      <Start />
      <Arrow />
      <RandomButton />
      <ProjectList />
      <IconMarquee />
      <Footer />
    </main>
  );
}

export default App;
