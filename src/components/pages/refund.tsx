import './refund.css';  

const Refund = () => {  
    return (  
        <div className="refund-policy-container">  
            <h2 className="policy-title">Refund Policy</h2>  
            <p className="policy-intro">  
                At <strong>yojna.fun</strong>, customer satisfaction is our priority. If you are not fully satisfied with your purchase, we are here to help.  
            </p>  

            <h3 className="policy-section">1. Eligibility for Refund</h3>  
            <p>You may be eligible for a refund if:</p>  
            <ul className="eligibility-list">  
                <li>The item is defective or damaged.</li>  
                <li>The item is not as described.</li>  
                <li>You contact us within 30 days of receiving your order.</li>  
                <li>Returns are eligible for 7 days once the order is delivered to you.</li>  
            </ul>  

            <h3 className="policy-section">2. Refund Process</h3>  
            <p>To initiate a refund, please follow these steps:</p>  
            <ol className="process-list">  
                <li>Contact our customer support at <span className="support-email">fashionhub@yojna.fun</span> to request a refund.</li>  
                <li>Provide your order number and details about the issue.</li>  
                <li>Return the item to the address provided by our support team.</li>  
            </ol>  

            <h3 className="policy-section">3. Refund Timeline</h3>  
            <p>  
                Once we receive your returned item, we will inspect it and notify you of the status of your refund. If approved, a refund will be credited to you within 5-7 business days.  
            </p>  

            <h3 className="policy-section">4. Contact Us</h3>  
            <p>If you have any questions about our refund policy or wish to speak with a representative, please reach out to us:</p>  
            <ul className="contact-details">  
                <li><strong>Email:</strong> <span className="support-email">fashionhub@yojna.fun</span></li>  
                {/* <li><strong>Phone:</strong> +91 9723663239</li>   */}
            </ul>  

            <p className="policy-conclusion">  
                We appreciate your business and strive to ensure that our customers have a positive shopping experience.  
            </p>  
        </div>   
    );  
}  

export default Refund;  