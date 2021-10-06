import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from '../components/App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContentTwo from '../components/AboutUs/AboutContentTwo';
import OurHistory from '../components/AboutUs/OurHistory';
import OurTeamStyleOne from '../components/Common/OurTeamStyleOne';
//import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/App/Footer';

import WhatWeDo from '../components/Common/WhatWeDo';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
const AboutUs = () => {
    return (
        <Layout>
            <SEO title="About Us" />

			<Navbar />
            
			{/* <PageBanner 
                pageTitle="About Us" 
            />   */}
            
            <AboutContentTwo />

            <OurHistory />
<WhatWeDo/>
            {/* <OurTeamStyleOne /> */}

            <TestimonialStyleOne />

            <Partner />
		  
			<Footer />
		</Layout>
    )
}

export default AboutUs;