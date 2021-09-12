import Pokemon1 from "../../Images/pokemon1.jpg";
import Pokemon2 from "../../Images/pokemon2.jpg";
import Pokemon3 from "../../Images/pokemon3.jpg";

const Carousel = () => {
  return (
    <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner carousel-img">
        <div className="carousel-item active">
          <img src={Pokemon1} alt="pokemon1" />
        </div>
        <div className="carousel-item">
          <img src={Pokemon2} alt="pokemon2" />
        </div>
        <div className="carousel-item">
          <img src={Pokemon3} alt="pokemon3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel;