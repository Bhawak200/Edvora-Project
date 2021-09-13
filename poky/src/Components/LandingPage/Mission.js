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
            We are the people who want to bring a smile to everyone's face by reminding them of their good childhood memories
            and what can be better than this famous show? Now you can come to this site if you are struggling hard for your favorite pokemon's move.
            Also, what is better than talking to your old friend about pokemon and
            whenever you find yourself in confusion, come to this site to find all information.
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
