import React from 'react';

import SEOAnalysis from '../../assets/images/seo-analysis.png'

const SEOAnalysisForm = () => {
    return (
        <div className="seo-analysis-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-img">
                            <img src={SEOAnalysis} alt="SEO Analysis" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-form">
                            <span className="sub-title">Analysis</span>
                            <h2>Get Free Project Analysis</h2>
                            <p>Augersoft provides our valuable clients with free project estimation and analysis.Sit down with our team of experts, lay down a plan and we would be obliged to work with you. </p>
                            
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="your_name" placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="your_email" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="phone_number" placeholder="Phone Number" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="website" placeholder="Project ?" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="default-btn">Go!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SEOAnalysisForm;