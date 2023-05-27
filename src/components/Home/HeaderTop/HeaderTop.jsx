import React from "react";
import { Link } from "react-router-dom";
import Images from "../../../images/index";

const HeaderTop = () => {
  return (
    <div
      style={{ height: "600px", width: "100%" }}
      className="row d-flex align-items-center container"
    >
      <div className="col-md-4 col-sm-6 col-12 offset-md-1 md-mx-5">
        <h1>
          Your Pain <span className="text-primary">Relief</span> <br />
          Starts From Here
        </h1>
        <p className="text-secondary">
          A{" "}
          <span
            className="text-warning"
            style={{
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Gold Medalist
          </span>{" "}
          and an Export Doctor, who had worked with reputable organization
          including Pakistan Sports Board, DHA, CMH, Wapda Hospital, Ittefaq
          hospital & having a couple of years of experience in running personal
          clinic.
        </p>
        <Link
          //   style={{ cursor: "pointer" }}
          //   to="/appointment"
          className="btn btn-primary btn-lg shadow rounded"
        >
          {" "}
          GET STARTED
        </Link>
      </div>
      <div className="col-md-6 col-sm-6 col-12">
        <img src={Images.OLDMAN_THERAPY} className="img-fluid rounded" alt="" />
      </div>
    </div>
  );
};

export default HeaderTop;
