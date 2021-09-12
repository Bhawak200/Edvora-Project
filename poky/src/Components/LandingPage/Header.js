

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand title">Poky</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav  nav-items navbar-nav-scroll">
            <li className="nav-item mx-4">
              <h4 className="nav-link active">Home</h4>
            </li>
            <li className="nav-item mx-4">
              <h4 className="nav-link active">About</h4>
            </li>
            <li className="nav-item mx-4">
              <h4 className="nav-link active">Mission</h4>
            </li>
            <li className="nav-item mx-4">
              <h4 className="nav-link active">Pokemons</h4>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header;