import './shipping.css';  

const Shipping = () => {  
    return (  
        <div className="refund-policy-container">  
            <h2 className="policy-title">Shipping Policy</h2>  
            <p className="policy-intro">  
                At <strong>yojna.fun</strong>, we are committed to delivering your order in a timely manner. Here’s everything you need to know about our shipping policy:  
            </p>  

            <h3 className="policy-section">1. Shipping Methods</h3>  
            <p>We offer a variety of shipping options to meet your needs:</p>  
            <ul className="shipping-methods">  
                <li>Standard Delivery: 5-7 business days</li>  
                <li>Express Delivery: 2-3 business days</li>  
                <li>Overnight Delivery: 1 business day (available for select locations)</li>  
            </ul>  

            <h3 className="policy-section">2. Shipping Costs</h3>  
            <p>Shipping costs are calculated based on the weight of your order and your location:</p>  
            <ul className="shipping-costs">  
                <li>Free shipping on orders over ₹50.</li>  
               
                <li>Additional fees apply for express and overnight shipping.</li>  
            </ul>  

            <h3 className="policy-section">3. Order Tracking</h3>  
            <p>After placing your order, you will receive a tracking number via email to follow your shipment’s progress.</p>  

            <h3 className="policy-section">4. Shipping Restrictions</h3>  
            <p>Please note the following shipping restrictions:</p>  
            <ul className="shipping-restrictions">  
                <li>We currently ship to locations within the country only.</li>  
                <li>Some items may have shipping restrictions due to supplier policies.</li>  
            </ul>  

            <h3 className="policy-section">5. Contact Us</h3>  
            <p>If you have any questions about your shipment, please contact our customer support:</p>  
            <ul className="contact-details">  
                <li><strong>Email:</strong> <span className="support-email">fashionhub@yojna.fun</span></li>  
                {/* <li><strong>Phone:</strong> +91 9723663239</li>   */}
            </ul>  
        </div>   
    );  
}  

export default Shipping;  