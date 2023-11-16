import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

function UserHome(props) {
  return (

    

    <div>
      <div className="container-main">
      <div className="container-fluid bg-light mt-5 py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="mb-4">Why to choose Decentralized Voting?</h1>
            <p className="mb-4">Decentralized voting offers the potential to transform the way we conduct elections, providing a more secure, transparent, and inclusive voting experience while reducing the risks and costs associated with centralized voting systems.</p>
            <a className="btn btn-primary rounded-pill px-4" href="https://www.geeksforgeeks.org/decentralized-voting-system-using-blockchain/">Read More</a>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <i className="fa fa-check fa-2x"></i>
                      </div>
                      <h5 className="mb-3">Enhanced Security and Transparency</h5>
                      <p>Decentralized voting systems remove this central authority, giving individual voters more control over their votes and reducing the risk of undue influence or manipulation by a single entity.</p>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <i className="fa fa-power-off fa-2x"></i>
                      </div>
                      <h5 className="mb-3">Accessibility and Inclusivity</h5>
                      <p>Decentralized voting systems can be accessed from anywhere with an internet connection, making it easier for a broader range of people to participate in the voting process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-md-4">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <i className="fa fa-user fa-2x"></i>
                      </div>
                      <h5 className="mb-3">Elimination of Centralized Control</h5>
                      <p>Decentralized voting systems remove this central authority, giving individual voters more control over their votes and reducing the risk of undue influence or manipulation by a single entity.</p>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <i className="fa fa-money-bill fa-2x"></i>
                      </div>
                      <h5 className="mb-3">Reduced Costs and Efficiency</h5>
                      <p>By automating the process through blockchain technology, administrative overhead is minimized, and the need for physical polling places and staff is reduced.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="container-list title">
          <h1>{props.el.electionTitle}</h1>
          <br />
          <center>{props.el.organizationTitle}</center>
          <table style={{ marginTop: "21px" }}>
            <tr>
              <th>admin</th>
              <td>
                {props.el.adminName} ({props.el.adminTitle})
              </td>
            </tr>
            <tr>
              <th>contact</th>
              <td style={{ textTransform: "none" }}>{props.el.adminEmail}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
