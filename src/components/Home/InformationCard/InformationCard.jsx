import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InformationCard.css";

const InformationCard = ({ info }) => {
  return (
    <div className="mx-auto col-md-8 col-lg-3 col-sm-8 m-md-auto col-12 text-white info-card">
      <div
        className={`d-flex align-items-center justify-content-center info-container info-${info.background}`}
      >
        <div className="me-3">
          <FontAwesomeIcon
            className="info-icon"
            icon={info.icon}
          ></FontAwesomeIcon>
        </div>
        <div>
          <h6>{info.title}</h6>
          <div style={{ fontSize: 14 }}>{info.description}</div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
