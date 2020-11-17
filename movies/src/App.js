import "./App.css";
import Watchlist from "./components/Watchlist";
import Watchedlist from "./components/Watchedlist";

function App() {
  return (
    <div className="App">
      <Watchlist />
      <Watchedlist />
    </div>
  );
}

export default App;
