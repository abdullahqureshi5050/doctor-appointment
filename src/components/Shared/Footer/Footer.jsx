import React from "react";
import FooterDetail from "./FooterDetail";
import "./Footer.css";

const Footer = () => {
  const noNamed = [
    { name: "Muscular Pain", link: "/" },
    { name: "Hijama", link: "/" },
    { name: "Personal Deit Plan", link: "/" },
    { name: "Sports Therapy", link: "/" },
    { name: "Check Up", link: "/" },
  ];
  const ourAddress = [
    {
      name: "CMA Healthcare complex Plot 194, Sector CCA Dha Phase 4, Lahore",
      link: "//google.com/map",
    },
  ];
  const oralHealth = [
    { name: "Muscular Pain", link: "/" },
    { name: "Hijama", link: "/" },
    { name: "Personal Deit Plan", link: "/" },
    { name: "Sports Therapy", link: "/" },
    { name: "Check Up", link: "/" },
  ];
  const services = [
    { name: "Muscular Pain", link: "/" },
    { name: "Hijama", link: "/" },
    { name: "Personal Deit Plan", link: "/" },
    { name: "Sports Therapy", link: "/" },
    { name: "Treatment Plan & Consult", link: "/" },
  ];

  return (
    <footer className="footer-area clear-both sm-pe-5">
      <div className="container pt-5">
        <div className="row md-py-5 footer-content">
          {/* <FooterDetail key={1} menuTitle={"."} menuItems={noNamed} /> */}
          <FooterDetail key={2} menuTitle="Services" menuItems={services} />
          {/* <FooterDetail
            key={3}
            menuTitle="Oral Health"
            menuItems={oralHealth}
          /> */}
          <FooterDetail key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="!#">Insagram</a>
              </li>
              <li className="list-inline-item">
                <a href="!#">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="!#">LinkedIn</a>
              </li>
            </ul>
            <div className="md-mt-5">
              <h6>Call now</h6>
              <button className="btn btn-brand">+92 331 4973033</button>
            </div>
          </FooterDetail>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
