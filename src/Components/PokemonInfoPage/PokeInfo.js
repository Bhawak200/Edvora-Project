


const PokeInfo = (props) => {
  return (
    <div className="container-fluid poke-list">
      <p className="poke-content">Name : {props.pokemon.Name}</p>
      <p className="poke-content">Hp: {props.pokemon.hp}</p>
      <p className="poke-content">Attack : {props.pokemon.Attack}</p>
      <p className="poke-content">Defense: {props.pokemon.Defense}</p>
      <p className="poke-content">Type : {props.pokemon.type}</p>
    </div>
  )
}

export default PokeInfo;