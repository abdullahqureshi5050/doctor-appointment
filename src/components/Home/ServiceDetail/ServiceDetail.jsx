import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="mx-auto mx-3 col-md-3 col-sm-12 col-12 text-center">
      <img src={service.img} width={"80%"} alt="" />
      <h5 className="mt-4 mb-5 brand-color">{service.desc}</h5>
    </div>
  );
};

export default ServiceDetail;
