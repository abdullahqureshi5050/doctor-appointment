import React from "react";
// import baby from '../../../images/baby.png';
import Images from "../../../images/index";

const FeaturedService = () => {
  return (
    <div className="feature-service pb-0 pb-md-5 pt-md-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 col-sm-6 col-12">
            <img src={Images.LEG_THERAPY} className="img-fluid" alt="" />
          </div>
          <div className="col-md-7 col-sm-6 col-12 align-self-center">
            <h1>
              Exceptional Physio Care at your{" "}
              <span className="text-primary">Home</span>
            </h1>
            <p className="my-4 text-secondary">
              We provide home service at your doorstep. Our physiotherapy home
              service provides personalized care and attention, bringing
              expertise and equipment to clients' homes. Our licensed
              physiotherapists create customized treatment plans for injury
              recovery, chronic conditions, and improved mobility. We use a
              holistic approach and provide compassionate care for optimal
              health and wellbeing in the comfort and convenience of home.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
