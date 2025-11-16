import './Privacy.css';

const Privacy = () => {
    return (

        <div className="privacy-container">  
            <h2 className="section-title">1. Introduction</h2>  
            <p className="intro-text">  
                Welcome to <strong>yojna.fun</strong>, operated by <strong>SHIDHIVINAYAK ENTERPRISE</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly.  
            </p>  

            <h2 className="section-title">2. Information We Collect</h2>  
            <ul className="info-list">  
                <li><strong>Personal Information:</strong> Name, email address, phone number, billing/shipping address.</li>  
                <li><strong>Payment Information:</strong> Payment details processed securely through third-party providers.</li>  
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on the site.</li>  
                <li><strong>Cookies:</strong> Used to improve user experience and website functionality.</li>  
            </ul>  

            <h2 className="section-title">3. How We Use Your Information</h2>  
            <ul className="info-list">  
                <li>To process and fulfill orders efficiently.</li>  
                <li>To enhance website performance and user experience.</li>  
                <li>To send order confirmations, updates, and promotional offers.</li>  
                <li>To prevent fraudulent activities and maintain security.</li>  
            </ul>  

            <h2 className="section-title">4. How We Share Your Information</h2>  
            <p className="sharing-info">  
                We do not sell, trade, or rent your personal information. However, we may share your data with:  
            </p>  
            <ul className="info-list">  
                <li>Third-party payment processors.</li>  
                <li>Delivery partners for shipping orders.</li>  
                <li>Legal authorities if required by law.</li>  
            </ul>  

            <h2 className="section-title">5. Data Security</h2>  
            <p className="data-security">  
                We implement strict security measures to protect your personal data from unauthorized access. However, no method of transmission over the Internet is 100% secure.  
            </p>  

            <h2 className="section-title">6. Your Rights</h2>  
            <ul className="info-list">  
                <li>Access, update, or delete your personal data.</li>  
                <li>Opt-out of marketing emails at any time.</li>  
                <li>Request information about data collection and usage.</li>  
            </ul>  

            <h2 className="section-title">7. Cookies Policy</h2>  
            <p className="cookies-policy">  
                We use cookies to enhance your browsing experience. You can manage cookie preferences in your browser settings.  
            </p>  

            <h2 className="section-title">8. Contact Us</h2>  
            <p className="contact-info">  
                If you have any questions or concerns regarding this Privacy Policy, please contact us:  
            </p>  
            <ul className="contact-details" style={{listStyleType:"none"}}>  
                <li><strong>Company Name:</strong> SHIDHIVINAYAK ENTERPRISE</li>  
                <li><strong>Website:</strong> yojna.fun</li>  
                <li><strong>Email:</strong> fashionhub@yojna.fun</li>  
                {/* <li><strong>Phone:</strong> +91 9723663239</li>   */}
                <li><strong>Address:</strong> New India Colony,Nikol,Ahmedabad-382345</li>  
            </ul>  
            <p className="consent-text">By using our website, you consent to the terms of this Privacy Policy.</p>  
        </div>  


    )
}

export default Privacy;
