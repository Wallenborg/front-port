import Header from "./components/header/Header";
import RandomButton from "./components/button/RandomButton";
import Start from "./pages/Start";
import "./App.css";

function App() {
  return (
    <main className="wrapper">
      <Header />
      <Start />
      <RandomButton />
      <div className="box-test">
        <p className="wip">WIP</p>
      </div>
    </main>
  );
}

export default App;
