import React from 'react';
import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { SiWhatsapp } from "react-icons/si";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div class="footer-contact-area bg-img bg-overlay akhr bg-fixed section-padding-100">



                <div class="container ">
                    <div class="row justify-content-center akhr2">

                        <div class="col-sm-6 col-lg-3">
                            <div class="footer-single-widget mb-50">
                                <div class="footer-logo">
                                    <a href="#"><img src="logo1.png" alt="Image" /></a>
                                </div>

                                <div class="footer-socila-icon">
                                    <a href="#"><i><TiSocialFacebook></TiSocialFacebook></i></a>
                                    <a href="#"><i><TiSocialTwitter></TiSocialTwitter></i></a>
                                    <a href="#"><i><TiSocialInstagram></TiSocialInstagram></i></a>
                                    <a href="#"><i><SiWhatsapp></SiWhatsapp></i></a>
                                </div>


                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="footer-single-widget mb-50">
                                <h2>Quick links</h2>
                                <ul>
                                    <li><Link to="/"><a href="#">Home</a> </Link></li>
                                    <li><Link to="About_main"><a href="#">About Us</a> </Link></li>
                                    <li><Link to="Benefits_main"><a href="#">Benefits</a> </Link></li>
                                    <li><Link to="Collection_main"><a href="#">Collect</a> </Link></li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="footer-single-widget second mb-50">
                                <h2>Marketplace</h2>
                                <ul>
                                    <li><Link to="Road_main"><a href="#">Roadmap</a> </Link></li>
                                    <li><Link to="Mint_main"><a href="#">Mint</a> </Link></li>
                                    <li><Link to="/Privacy_Policy"><a href="#">Privacy Policy</a> </Link> </li>
                                    <li><Link to="/Terms_main"><a href="#">Terms & Conditions</a></Link> </li>

                                </ul>
                            </div>
                        </div>

                        
                        <div class="col-sm-6 col-lg-3">
                            <div class="footer-single-widget third mb-50">
                                <h2>About Us</h2>
                                <div class="f-add-info mt-30">
                                    <p className='alna'>Metaverse is a wide new world with endless possibilities and new experiences, and our WHE Club is the key to unlocking this world. </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="copy-right-area container-fluid">
                        <hr />
                        <div class="copy-right-content-text text-center">
                            <p className=' '>© Copyright & WHE NFT (2022).</p>
                        </div>

                    </div>


                </div>


            </div>

        </div>
    )
};

export default Footer