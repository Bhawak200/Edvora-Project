import mission from "../../Images/Mission.svg"

const Mission = () => {
  return (
    <div className="container-fluid my-5" id="Mission">
      <div className="row p-3">
        <h4 className="text-center my-1 tomission">Our mission</h4>
        <div className="btn mission-style btn-sm my-1"></div>
      </div>
      <div className="row mission-row">
        <div className="col-lg-6">
          <h4 className="tomission">
            What Problem Poky is trying to solve ?
          </h4>
          <p className="intro-font mission-front">
            Wedding is among the biggest milestones in one’s life. In lieu of
            cherishing every moment of the event of this magnitude, we usually
            spend most of our time arranging it. In the world of digitalization
            where online bookings and payments are just a click away, Wedley
            sees an opportunity to embrace new technologies and integrate them
            to various wedding services, thereby enhancing ease of living of the
            people of India.   <br /> <br />
            This introduction of innovation will offer customers a better
            opportunity to leverage wedding services from their mobile phones
            saving huge time and effort of wandering door to door to get a hold
            of them. On the other side of the table, Wedley offers wedding
            vendors a bigger platform to showcase their businesses and unique
            selling points. This will lead to vendors of all sizes a better
            chance to attract customers.
          </p>
        </div>
        <div className="col-lg-6 mission-img">
          <img src={mission} className="img-fluid" alt="book"></img>
        </div>
      </div>
    </div>
  );
};

export default Mission;
