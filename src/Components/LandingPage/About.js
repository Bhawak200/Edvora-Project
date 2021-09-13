import about from "../../Images/About.svg"

const About = () => {
  return (
    <div className="container-fluid" id="About">
      <div className="row p-4">
        <h2 className="text-center my-2">About</h2>
        <div className="btn about-style btn-sm "></div>
      </div>
      <div className="row about">
        <div className="col-md-6">
          <img src={about} className="w-100 h-90 mx-auto img-fluid img-border rounded" alt="book"></img>
        </div>
        <div className="col-md-6">
          <h4 className="toCenter">Why Users Love Poky</h4>
          <p className="intro-font">
            You must have watched pokemon in your childhood, isn't it? Or do you still watch that famous show? If it's true,
            you must have searched for a place where you can find information about each pokemon's power moves, favorite attacks, or
            strength. Here we are with details of all the pokemon from Pikachu to Bulbasaur, from Charmander to Wartotle, from Psychic to
            Ghost Pokemon; we have got all those in a single place.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;