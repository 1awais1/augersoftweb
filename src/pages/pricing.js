import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from '../components/App/Navbar';
import MainBanner from "../components/HomeDemoOne/MainBanner"
import Footer from '../components/App/Footer';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import { Link } from "gatsby"

const Pricing = () => {
    return (
        <Layout>
            <SEO title="Pricing" />

			<Navbar />

			<MainBanner 
                pageTitle="Pricing" 
            />  

            <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <i className="flaticon-startup"></i>
                                        <div className="circles-box">
                                            <div className="circle-one"></div>
                                        </div>
                                    </div>
                                    <h3>Basic Plan</h3>
                               
                                
                                </div>

                                <div className="pricing-features">
                                    <ul>
                                        <li>Weekly Standups</li>
                                        <li>3-5 offshore resources</li>
                                        <li>Project Planing</li>
                                        <li>Dedicated server to communicate with offhsore resources</li>
                                        <li>24/7 Support</li>
                                        <li> </li>
                                        <li> </li>
                                        <li> </li>
                                        <li> </li>
                                    </ul>
                                </div>

                                {/* <div className="price">
                                    $49.99
                                    <span>Per Month</span>
                                </div> */}

                                <Link to="/contact" className="default-btn">
                                    Contactus for Pricing
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <i className="flaticon-jigsaw"></i>
                                        <div className="circles-box">
                                            <div className="circle-one"></div>
                                        </div>
                                    </div>
                                    <h3>Professional Plan</h3>
                                </div>

                                <div className="pricing-features">
                                    <ul>
                                        <li>Weekly Standups</li>
                                        <li>5-10 offshore resources</li>
                                        <li>Logo & Graphic Designing</li>
                                        <li>5-10 offshore resources</li>
                                        <li>Project Planning</li>
                                        <li>Dedicated server to communicate with offshore resources</li>
                                        <li>24/7 Support</li>
                                        <li>Modifications IN requirements</li>
                                        <li>Business process flow diagram</li>
                                    </ul>
                                </div>

                                {/* <div className="price">
                                    $69.99
                                    <span>Per Month</span>
                                </div> */}

                                <Link to="/#" className="default-btn">
                                    Contactus for Pricing
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <i className="flaticon-diamond"></i>
                                        <div className="circles-box">
                                            <div className="circle-one"></div>
                                        </div>
                                    </div>
                                    <h3>Premium Plan</h3>
                                </div>

                                <div className="pricing-features">
                                    <ul>
                                        <li>50GB Bandwidth Internet</li>
                                        <li>Business & Financ Analysing</li>
                                        <li>35 Social Media Reviews</li>
                                        <li>Customer Managemet</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                </div>

                                <div className="price">
                                    $99.99
                                    <span>Per Month</span>
                                </div>

                                <Link to="/#" className="default-btn">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StartProjectWithUs />

			<Footer />
		</Layout>
    )
}

export default Pricing;