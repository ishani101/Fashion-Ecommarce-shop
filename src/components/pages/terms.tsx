import './TermsAndConditions.css';

const Terms = () => {
    return (

        <div className="terms-container">  
        <h2 className="terms-title">Terms and Conditions</h2>  
        <p className="intro-text">  
            Welcome to <strong>yojna.fun</strong>. These terms and conditions outline the rules and regulations for the use of our website and services.  
        </p>  

        <h3 className="terms-section">1. Acceptance of Terms</h3>  
        <p>  
            By accessing this website, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, you must not use our website.  
        </p>  

        <h3 className="terms-section">2. Changes to Terms</h3>  
        <p>  
            We reserve the right to modify these terms at any time. Any changes will take effect immediately upon posting on this page. We encourage you to review the terms periodically.  
        </p>  

        <h3 className="terms-section">3. Use of the Website</h3>  
        <p>  
            You agree to use our website for lawful purposes only, and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.  
        </p>  

        <h3 className="terms-section">4. Intellectual Property</h3>  
        <p>  
            All content, trademarks, and other intellectual property displayed on the website are the property of <strong>yojna.fun</strong> or licensed to us. Unauthorized use of any material is prohibited.  
        </p>  

        <h3 className="terms-section">5. Limitation of Liability</h3>  
        <p>  
            In no event shall yojna.fun be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website.  
        </p>  

        <h3 className="terms-section">6. Governing Law</h3>  
<p>  
    These terms shall be governed by and interpreted in accordance with the laws of India, where yojna.fun operates.  
</p>  

        <h3 className="terms-section">7. Contact Us</h3>  
        <p>If you have any questions about these Terms and Conditions, please contact us:</p>  
        <ul className="contact-details">  
            <li><strong>Email:</strong> <span className="support-email">fashionhub@yojna.fun</span></li>  
            {/* <li><strong>Phone:</strong> +91 9723663239</li>   */}
        </ul>  
    </div>  


    )
}

export default Terms;
