
import PokeInfo from "./PokeInfo"
import { Link } from "react-router-dom"
import { useState } from "react"

const SearchPokemon = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState({
    Name: "",
    Img: "",
    hp: "",
    Attack: "",
    Defense: "",
    type: ""
  })
  const [showPokemon, setShowPokeMon] = useState(false);

  const handleChange = (e) => {
    setPokeName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(data => data.json())
      .then(res => {
        setPokemonInfo({
          Name: pokeName,
          Img: res.sprites.front_default,
          hp: res.stats[0].base_stat,
          Attack: res.stats[1].base_stat,
          Defense: res.stats[2].base_stat,
          type: res.types[0].type.name
        })
        setShowPokeMon(true);
      })
      .catch(err => {

        alert("Sorry, No information Available !!");
        setShowPokeMon(false);
      })
    setPokeName("")
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <form className="form-style text-center" onSubmit={handleSubmit} >
          <div className="input">
            <label className="form-label">Search Pokemon</label>
            <input type="text" className="form-control bg-input" onChange={handleChange} value={pokeName} />
          </div>
          <button type="Submit" className="btn  mb-2 mx-2 submit-button">Submit</button>
          <Link to="/"><button className="btn  mb-2  mx-2 submit-button">Back to Home</button></Link>
        </form>
      </div>
      {showPokemon && <div className="row poke-content">
        <div className="col-md-6 col-sm-12 zoom">
          <img src={pokemonInfo.Img} className="img-fluid" alt="pokemon" />
        </div>
        <div className="col-md-6 col-sm-12 zoom">
          <PokeInfo pokemon={pokemonInfo} />
        </div>
      </div>}
    </div>
  )
}
export default SearchPokemon