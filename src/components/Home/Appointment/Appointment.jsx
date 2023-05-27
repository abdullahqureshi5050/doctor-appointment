import React from "react";
import doctor from "../../../images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment my-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-5">
            <h5 className="brand-color text-uppercase">AppointMent</h5>
            <h1 className="">Make An Appointment Today </h1>
            <p>Book an appoinment either at clinic or at your home. </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
