import React from "react";
import flouride from "../../../images/flouride.png";
import cavity from "../../../images/cavity.png";
import teath from "../../../images/teath.png";
import Images from "../../../images/index";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Services.css";

const serviceData = [
  {
    name: "Muscular Pain Therapy",
    img: Images.THERAPY,
    desc: "Muscular Pain Therapy",
  },
  {
    name: "Hijama",
    img: Images.CUPPING,
    desc: "Hijama Therapy",
  },
  {
    name: "Sports Therapy",
    img: Images.KNEE,
    desc: "Sports Therapy",
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5" id="serviceContaint">
      <div className="text-center">
        <h2 className="brand-color">Services We Provide</h2>
        {/* <h2>Services We Provide</h2> */}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 row">
          {serviceData.map((service) => (
            <ServiceDetail service={service} key={service.name}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
