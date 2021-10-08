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
                    <h3>Mobile App Development</h3>
                    
                    
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
                                        <ul className='features-list'>
                                        <li><i className='bx bx-right-arrow-alt'></i></li>
                                        <li><i className='bx bx-right-arrow-alt'></i></li><li><i className='bx bx-right-arrow-alt'></i></li><li><i className='bx bx-right-arrow-alt'></i></li>
                                        
                                        </ul>
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
                                        <li>Project Planning</li>
                                        <li>Dedicated server to communicate with offshore resources</li>
                                        <li>24/7 Support</li>
                                        <li>Logo & Graphic Designing</li>
                                        
                                        
                                        
                                       
                                        <li>Modifications IN requirements</li>
                                        <li>Business process flow diagram</li>
                                        <li><i className='bx bx-right-arrow-alt'></i></li>
                                    </ul>
                                </div>

                                {/* <div className="price">
                                    $69.99
                                    <span>Per Month</span>
                                </div> */}

                                <Link to="/contact" className="default-btn">
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
                                    <h3>Enterprise Plan</h3>
                                </div>

                                <div className="pricing-features">
                                    <ul>
                                    <li>Weekly Standups + AD-Hoc Meetings</li>
                                        <li>10-20 offshore resources</li>
                                        <li>Project Planning</li>
                                        <li>Dedicated server to communicate with offshore resources</li>
                                        <li>24/7 Support</li>
                                        <li>Logo & Graphic Designing</li>
                                        
                                        
                                        
                                       
                                        <li>Unlimited Modifications in requirements</li>
                                        <li>Business process flow diagram</li>
                                        <li>Architectural Presentation</li>
                                    </ul>
                                </div>

                                <Link to="/contact" className="default-btn">
                                    Contactus for Pricing
                                </Link>
                            </div>
                        </div>

                        <h3>Offshore Productions</h3>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <i className="flaticon-conversation"></i>
                                        <div className="circles-box">
                                            <div className="circle-one"></div>
                                        </div>
                                    </div>
                                    <h3>Team Support Plan</h3>
                                </div>

                                <div className="pricing-features">
                                    <ul>
                                    <li>Weekly Standups + AD-Hoc Meetings</li>
                                        
                                        <li>Dedicated server to communicate with offshore resources</li>
                                        <li>24/7 Support</li>
                                        <li>Website/App maintainance</li>
                                        <li>Project Takeover/Management</li>
                                        <li>Upgrades and Enhancements</li>
                                        
                                    </ul>
                                </div>

                                <Link to="/contact" className="default-btn">
                                    Contactus for Pricing
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