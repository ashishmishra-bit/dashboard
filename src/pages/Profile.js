import React, { useState } from "react";
import "../css/Profile.css";

const Profile = () => {
  return (
    <>
      <div className="main_div">
        <div className="header-profile">
          <div className="heading_container">
            <h2 className="heading">My Account</h2>
            <h6 className="heading_down">Welcome to XYZ Account</h6>
          </div>
          <div className="heading-image-container-profile">
            <img
              src="https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b"
              alt=" "
              height="80px"
              width="80px"
            />
            <h2>Hello Giselle </h2>
          </div>
        </div>

        <div className="bottom-container-profile-main">
          <div className="bottom-container-profile-one">
            <div className="Card1">
              <div className="Card-image-container">
                <center>
                  <img
                    src="https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b "
                    alt=" "
                    height="180px"
                    width="180px"
                  />
                </center>
              </div>
            </div>
            <div className="Card1-text-container">
              <h2>My Profile</h2>
              <p>Giselle</p>
              <hr />
              <p>Giselle@gmail.com</p>
              <hr />
              <p>SMS Alert Notification</p>
              <button>Save</button>
            </div>
          </div>

          <div className="bottom-container-profile-two">
            <div className="second-Cards">
              <p>My Recent Account</p>
              <hr></hr>
              <div className="sec-card-parta">
                <div className="sec-card-flrow">
                  <p>Active Account</p>
                  <p>23x-456xc-7896</p>
                </div>
                <div className="second-Cards-heading-button">
                  <button>Blocked Account</button>
                </div>
              </div>

              <div className="sec-card-parta">
                <div className="sec-card-flrow">
                  <p>Blocked Account</p>
                  <p>556-456xc-7896</p>
                </div>
                <div className="second-Cards-heading-button">
                  <button>Unblocked Account</button>
                </div>
              </div>
            </div>

            <div className="third-Cards">
              <p className="third-Cards-header">My Orders</p>
              <hr></hr>

              <div className="sec-card-parta">
                <div className="sec-card-flrow">
                  <p>Linen-spa Memory Foam</p>
                  <p>Delivered 8/22/2021</p>
                </div>
                <div className="third-Cards-heading-button">
                  <button>Order Again</button>
                </div>
              </div>

              <div className="sec-card-parta">
                <div className="sec-card-flrow">
                  <p>Adidas Falcons shoes</p>
                  <p>Delivered 6/11/2021</p>
                </div>
                <div className="third-Cards-heading-button">
                  <button>Order Again</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
