import React from "react";
import propertyListingImg from '../assets/property-listing.png';
import monthlySearchImg from '../assets/monthly-searches.png';
import ownersAdvertImg from '../assets/owners-advertise.png';
import footerImg1 from '../assets/footer-img1.png';
import footerImg2 from '../assets/footer-img2.png';
import footerImg3 from '../assets/footer-img3.png';

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-data">
                <div className="footer-text">
                    <p style={{color:'#FF6646'}}>Sell or Rent your property</p>
                    <h1>Property owners get free posting when they register</h1>
                    <p style={{marginTop:'25px'}}>Post your residential/commercial property</p>
                </div>
                <div className="footer-icons">
                    <div className="footer-icon">
                        <img src={propertyListingImg} alt="Property Listing"/>
                        <p style={{marginBottom:"0px"}}>5 Lakh plus*</p>
                        <p>Property Listing</p>
                    </div>
                    <div className="footer-icon">
                        <img src={ownersAdvertImg} alt="Owners Advertise"/>
                        <p style={{marginBottom:"0px"}}>5 Lakh plus*</p>
                        <p>Owners Advertise</p>
                    </div>
                    <div className="footer-icon">
                        <img src={monthlySearchImg} alt="Monthly Searches"/>
                        <p style={{marginBottom:"0px"}}>50 Lakh plus*</p>
                        <p>Monthly Searches</p>
                    </div>
                </div>
            </div>
            
            <div className="footer-images">
                <img style={{marginTop:'60px'}} src={footerImg1} alt="Footer img 1"/>
                <img src={footerImg2} alt="Footer img 2"/>
                <img style={{marginTop:'60px'}} src={footerImg3} alt="Footer img 3"/>
            </div>
        </div>
    )
}