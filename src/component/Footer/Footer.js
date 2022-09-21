import React from 'react';
import "../../index.css";
export default function Footer() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="heighers">
                    <div className= "heigher"> 
                        <i className="fa-solid fa-truck"></i>
                        <div className="text">
                            <h3>FREE SHIPPING</h3>
                            <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Odio, Obcaecati!</p>
                        </div>
                    </div>

                    <div className= "heigher"> 
                        <i className="fa-solid fa-sack-dollar"></i>
                        <div className="text">
                            <h3>PRICE PROMISE</h3>
                            <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Odio, Obcaecati!</p>
                        </div>
                    </div>

                    <div className= "heigher"> 
                        <i className="fa-solid fa-badge-check"></i>
                        <div className="text">
                            <h3>LIFETIME WARRANTY</h3>
                            <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Odio, Obcaecati!</p>
                        </div>
                    </div>
                </div>

                <div className="less">
                    <div className="than">
                        <p className='border'>
                            COMFY SLOTH
                        </p>

                        <div className="icons">
                            <span><i className="fa-brands fa-facebook-f"></i></span>
                            <span><i className="fa-brands fa-twitter"></i></span>
                            <span><i className="fa-brands fa-youtube"></i></span>
                            <span><i className="fa-brands fa-google-plus"></i></span>
                            <span><i className="fa-brands fa-instagram"></i></span>
                        </div>

                        <div className="words">
                        Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Labore Illum Illo Exercitationem Ex Porro Consequuntur Quae Mollitia Qui Accusamus! Molestiae.
                        </div>

                        <div className= "call">
                            <p className="adress">
                                <span><i className="fa-solid fa-map-location-dot"></i></span>123 Main Street, Los Angeles
                            </p>

                            <p className="phone">
                                <span>
                                    <i className="fa-solid fa-phone"></i>
                                </span>Phone : + (310) 111 2222
                            </p>

                            <p className="Email">
                                <span>
                                    <i className="fa-solid fa-envelope"></i>
                                </span>Email : Eamil@Email.Com
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
