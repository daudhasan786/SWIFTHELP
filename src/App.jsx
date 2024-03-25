import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";

import Endpart from "./components/Endpart";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Middle />
      <Endpart />
    </div>
  );
}

export default App;
