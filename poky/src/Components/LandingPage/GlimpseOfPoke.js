



const GlimpseofPoke = () => {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 poke-row">
        <div className="col">
          <div className="card  poke1" />
        </div>
        <div className="col ">
          <div className="card poke2" />
        </div>
        <div className="col">
          <div className="card poke3" />
        </div>
        <div className="col">
          <div className="card poke4" />
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12 text-center">
          <button className="btn deg_btn">See More</button>
        </div>
      </div>
    </div>
  )
}

export default GlimpseofPoke;