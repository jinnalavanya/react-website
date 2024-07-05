import React from "react";
import SendEnquiry from "../Hooks/sendEnquiry";
const ContactFn = () => {
  return (
    <div className="container-fluid p-0">
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-lg-6 p-5">
            <h3>Reach us</h3>
            <SendEnquiry />
          </div>
          <div className="col-12 col-lg-6">
            <p>Address</p>
            <p>
              <span>
                <i class="bi bi-house-add-fill"></i>
              </span>
              House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City
              Main Road, Hyderabad, Telangana- 081
            </p>
            <p>+91 81439 56849</p>
            <p>info@hyderabadittrainings.com</p>
            <p>hr@hyderabadittrainings.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFn;
