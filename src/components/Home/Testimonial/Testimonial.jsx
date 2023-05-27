import React from "react";
// import ema from "../../../images/ema.png";
// import john from "../../../images/john.png";
import watson from "../../../images/watson.png";
import TestimonialDetails from "./TestimonialDetails";
import "./Testimonial.css";
// import useFetch from "../../hooks/useFetch";

const Testimonial = () => {
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  //   const { data, loading, error } = useFetch(`${baseUrl}/auth/reviews`);
  const data = [
    {
      _id: 1,
      desc: "Review 1",
      name: "Muhammad Abdullah",
      address:
        "I visited my doctors for my backpain problem. Only this doctor was able to fix me.",
      image: watson,
    },

    {
      _id: 2,
      desc: "Review 2",
      name: "Muhammad Abdul Rehman",
      address: "She is an amzaing doctor helped me with my neck pain.",
    },

    {
      _id: 3,
      desc: "Review 3",
      name: "Saher",
      address: "Best Hajama doc in Lahore. Totally Recommended.",
    },
  ];
  return (
    <section className="container testimonial my-3" id="reviewsContaints">
      <div className="cointainer">
        <div className="section-header">
          <h5 className="brand-color text-uppercase">Testimonial</h5>
          <h1>
            What Our <span className={"text-primary"}>Patients</span> Says
          </h1>
        </div>
        <div className="card-deck ">
          <div className="d-flex justify-content-center ">
            <div className="row w-100 ">
              {data &&
                data?.map((review) => (
                  <TestimonialDetails
                    key={review._id}
                    testimonial={review}
                  ></TestimonialDetails>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
