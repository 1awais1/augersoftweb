import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';   
import Footer from '../components/App/Footer';
import Navbar from '../components/App/Navbar';
import Layout from '../components/App/Layout';
import BootstrapCarousel from '../components/App/carousel11';
import SEO from "../components/App/SEO"
import CaseStudies from '../components/Common/CaseStudies';
import StartWomenProject from '../components/Common/StartWomenProjects';
import WomenInfo from '../components/Common/WomenInfo';
const AugWomen = ()=> {

return (

    
    <Layout>

<SEO title="Augersoft Women" />

<Navbar />

<BootstrapCarousel/>
<CaseStudies/>
<WomenInfo/>

<StartWomenProject/>






{/* <TestimonialStyleOne/> */}

<Footer/>

</Layout>
)


}
export default AugWomen;