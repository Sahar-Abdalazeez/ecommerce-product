import logo from "./logo.svg";
import { Home } from "./containers/Home";
import { Header } from "./components/Header.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Home />
    </div>
  );
}

export default App;
