import "./App.css";
import Watchlist from "./components/Watchlist";
import Watchedlist from "./components/Watchedlist";
import AddButton from "./buttons/AddButton";

function App() {
  return (
    <div className="App">
      <AddButton />
      <Watchlist />
      <Watchedlist />
    </div>
  );
}

export default App;
