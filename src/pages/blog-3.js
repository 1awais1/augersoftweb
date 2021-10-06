import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from '../components/App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import MainBanner from "../components/HomeDemoOne/MainBanner"
import Footer from '../components/App/Footer';
import { Link } from "gatsby"

import BlogImg1 from '../assets/images/teams/farooq 11.jpg'
import BlogImg2 from '../assets/images/teams/11.jpg'
import BlogImg3 from '../assets/images/teams/bakht11.jpg'
import BlogImg4 from '../assets/images/teams/danish11.jpg'
import BlogImg5 from '../assets/images/teams/asim11.jpg'
import BlogImg6 from '../assets/images/teams/sherry11.jpg'
import BlogImg7 from '../assets/images/teams/dawood11.jpg'
import BlogImg8 from '../assets/images/teams/amna11.jpg'
import ServicesImg1 from '../assets/images/banner-img4.png'
import User1 from '../assets/images/user1.jpg'
import User2 from '../assets/images/user2.jpg'
import User3 from '../assets/images/user3.jpg'

const BlogThree = () => {
    return (
        <Layout>
            <SEO title="Blog Three" />

			<Navbar />
            <br/>
            <br/>
            <br/>
{/* 
			<MainBanner 
                pageTitle="Blog Grid (Full Width)" 
            /> */}

            <div className="overview-area ptb-50">
                <div className="container">
                    <div className="overview-box">
                        <div className="overview-content">
                            <div className="content">
                            <h2>Team AugerSoft</h2>
                                <span className="sub-title">Best Resources from All across the globe</span>
                                
                                <p>Check out our team of extremely talented Developers,scientists and engineers that not only work effortlessly but also cater to the needs of our clients on day to day basis.</p>
                            </div>
                            <div className="content">
                            <span className="sub-title">Choose a pick to your concern</span>
                            <p>Augersoft hires its team of highly capable employees that work on a number of development platforms. Augersoft picks up the best of the employees according to the nature and requirements of your product.</p>
                        </div>
                        <div className="content">
                            <span className="sub-title">Get In touch with our Team</span>
                            <p>Augersoft provides the ease of communicating with our team directly leave a message to any of our team members and we'll make sure to reach out to you</p>
                        </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src={ServicesImg1} alt="image"  height="500" width="600" color="white"/>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>

            <div className="blog-area bg-f9f9f9 ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-1" className="d-block">
                                        <img src={BlogImg1} alt="Blog" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                          
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        {/* <img src={User1} alt="User" /> */}
                                        <div className="info">
                                            <h5>Farooq M Asgahr</h5>
                                            <span>CEO</span>
                                            <span>farooq@augersoft.com</span>
                                            <span>Minnesota,USA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-awais" className="d-block">
                                        <img src={BlogImg2} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                            
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        {/* <img src={User2} alt="User" /> */}
                                        <div className="info">
                                            <h5>Awais Asad</h5>
                                            <span>Web Developer</span>
                                            <span>Lahore,Pakistan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-bakht" className="d-block">
                                        <img src={BlogImg3} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                           
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        {/* <img src={User3} alt="User" /> */}
                                        <div className="info">
                                            <h5>Bakht</h5>
                                            <span>Flutter Developer/Trainer</span>
                                            <span>bakht@augersoft.com</span>
                                            <span>Quetta,Pakistan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-danish" className="d-block">
                                        <img src={BlogImg4} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        {/* <img src={User1} alt="User" /> */}
                                        <div className="info">
                                            <h5>Danish</h5>
                                            <span>ATC/WEB Developer</span>
                                            <span>Lahore,Pakistan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-asim" className="d-block">
                                        <img src={BlogImg5} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-asim">
                                            
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        {/* <img src={User2} alt="User" /> */}
                                        <div className="info">
                                            <h5>Asim M Javed</h5>
                                            <span>CTO</span>
                                            <span>asim@augersoft.com</span>
                                            <span>Qasur,Pakistan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/about-us-2" className="d-block">
                                        <img src={BlogImg8} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                           
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        {/* <img src={User3} alt="User" /> */}
                                        <div className="info">
                                            <h5>Amna Azhar</h5>
                                            <span>HR Manager</span>
                                            <span>amna@augersoft.com</span>
                                            <span>Lahore,Pakistan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-sherry" className="d-block">
                                        <img src={BlogImg6} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        {/* <img src={User3} alt="User" /> */}
                                        <div className="info">
                                            <h5>Shehryar M Khan</h5>
                                            <span>IT Project Manager</span>
                                            <span>shehryar@augersoft.com</span>
                                            <span>Chicago,USA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-dawood" className="d-block">
                                        <img src={BlogImg7} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-dawood">
                                            
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        {/* <img src={User1} alt="User" /> */}
                                        <div className="info">
                                            <h5>Dawood</h5>
                                            <span>Backend Developer</span>
                                            <span>Lahore, Pakistan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

 
                        {/* <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
	 
			<Footer />
		</Layout>
    )
}

export default BlogThree;