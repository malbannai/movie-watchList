import "./App.css";
import Watchlist from "./components/Watchlist";
import Watchedlist from "./components/Watchedlist";
import AddButton from "./buttons/AddButton";

function App() {
  return (
    <div className="App">
      <h1 className="title">Welcome to Desiny Movies List</h1>
      <AddButton />
      <div className="containter">
        <Watchlist />
        <Watchedlist />
      </div>
    </div>
  );
}

export default App;
