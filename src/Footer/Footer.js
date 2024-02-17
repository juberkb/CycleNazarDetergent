import React from 'react';

import "./footer.css"

import FooterLogo from "../Media/CycleLogo.png"


function Footer() {
    return ( 
   <section className="footer">
<div className="container">

 <div className="footerContainer">
<div className='row'>
  <div className="footerContent col-md-4">

   {/* <img className="portfolioLogo" src={portfolioLogo} alt="portfolioLogo"/>*/}
   <img className="FooterLogo" src={FooterLogo} alt="FooterLogoLogo"/>
  <p className="footerText"> Hi there! If you are looking for an agency to help you create a remarkable presence online, you`ve come to the right place. We can help you take your business to the next level.</p>



   {/* <div className="socialMediaIcons">
  <img src={logoLinkdin} className="SocialmediaIcons" alt="instalog" href="https://www.instagram.com/ daylifemedia/"/>
  <img src={logoInsta} className="SocialmediaIcons" alt="facebooklog" href="https://www.instagram.com/ daylifemedia/"/>
  <img src={logoSnap} className="SocialmediaIcons" alt="tweeter" href="https://www.facebook.com/daylifemediajaipur"/>
    <img src={logoFacebook} className="SocialmediaIcons" alt="tweeter" href="https://www.facebook.com/daylifemediajaipur"/>
      <img src={logoTweeter} className="SocialmediaIcons" alt="tweeter" href="https://www.facebook.com/daylifemediajaipur"/>
  </div>*/}


  </div>

 <div className="footerContactInfo col-md-4">
    <h3 className='footerHeadingText'>Cycle Detergent Company</h3>
      <span className='footerHeadingText'>Contact Information</span>
    <p className="footerContactInfoText">+91-8003138660</p>
    <p >juberkhan.jkc@gmail.com</p>
      <span className='footerHeadingText'>You can find us at:</span>
  <p>K34, House in Board,</p>
 <p>Shastri Nagar, Jaipur,</p>
 <p> Raj. India - 302016</p>
  </div>

<div className="footerContactPage col-md-4">
<div className="footerContactAddress">
  <h3 className='footerHeadingText'>Company Profile :</h3>
  <p>About US</p>
 <p>Our Products</p>
 <p>Infrastructure & Facilities</p>
  <p>Distributor Enquiry Form</p>
  </div>

   

</div>
</div>
  

  </div>
<hr/>
<div className="footerCopyRightsHandle">
<p className="footerCopyRights">Copyrights 2024 <span style={{color: "lightblue"}}> @CycleDetergent </span>  All Rights Reserverd </p>
 </div>

</div>
</section>
     );
}

export default Footer;