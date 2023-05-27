import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import InformationCard from "../InformationCard/InformationCard";
import React from "react";

const infosData = [
  {
    title: "Opening Hours",
    description: "Monday to Saturday 10 am - 7 pm",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description:
      "CMA Healthcare complex Plot 194, Sector CCA DHA Phase 4, Lahore",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+92 331 4973033",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75 infos-card">
        {infosData.map((info) => (
          <InformationCard info={info} key={info.title}></InformationCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
