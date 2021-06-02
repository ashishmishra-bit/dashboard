import React, { useState } from 'react'
import "../css/Profile.css"

const Profile = () => {
    return (
        <>
            <div className="main_div">
                <div className="header-profile">
                    <div className="heading_container">
                        <h1 className="heading">My RaiseDigital Account</h1>
                        <h5 className="heading_down">Welcome to Raise Digital Account</h5>
                    </div>
                    <div className="heading-image-container-profile">
                        <img src="https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b" alt=" " height="100px" width="100px" />
                        <h2>Hello Giselle </h2>
                    </div>
                </div>

                <div className="bottom-container-profile-main">
                    <div className="bottom-container-profile-one">
                        <div className="Card1">
                            <div className="Card-image-container">
                                <center>
                                    <img src="https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b " alt=" " height="180px" width="180px" />
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
                            <div className="second-Cards-header">
                                <div className="second-Cards-heading">
                                    <p>Active Account</p>
                                    <h6>23x-456xc-7896</h6>
                                    <p>Blocked Account</p>
                                    <h6>556-456xc-7896</h6>


                                </div>

                                <div className="second-Cards-heading-button">
                                    <div className="second-Cards-heading-button-one">
                                    <button>Blocked Account</button>
                                    </div>
                                    <div className="second-Cards-heading-button-two">
                                    <button>Unblocked Account</button>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="third-Cards">
                            <p className="third-Cards-header">My Orders</p>
                            <hr></hr>
                            <div className="third-Cards-heading">
                                <div className="third-Cards-heading-text">
                                    <p className="third-Cards-heading-text-p">Linen-spa 8 inch Memory Foam and spring</p>
                                    <h6>Delivered 8/22/2021</h6>
                                    <p className="third-Cards-heading-text-p">Adidas Falcons shoes</p>
                                    <h6>Delivered 6/11/2021</h6>
                                </div>
                                <div className="third-Cards-heading-button">
                                    <div className="third-Cards-heading-button-one">
                                    <button>Order Again</button>
                                    </div>
                                    <div className="third-Cards-heading-button-two">
                                    <button>Order Again</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>







            </div>
        </>
    );
};

export default Profile
