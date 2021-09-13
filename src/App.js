
import './App.css';
import Home from "./Components/LandingPage/Home"
import SearchPokemon from './Components/PokemonInfoPage/SearchPokemon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/pokemons"><SearchPokemon /></Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
