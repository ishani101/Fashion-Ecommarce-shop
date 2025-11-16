import  {useState} from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = () => {
    // e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14684.146308833839!2d72.665591214423!3d23.05912055969957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e873b26713bd5%3A0x1548fb1de79c36b7!2sNew%20India%20Colony%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1742980653713!5m2!1sen!2sin"
            width="800"
            height="600"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="uomomap"
          ></iframe>



        </div>
        <div className="contactInfo">
          <div className="contactAddress">
            
            <div className="address">
              <h3>Store in India</h3>
              <p>
              New India Colony,Nikol,Ahmedabad-382345
                <br /> Gujrat,India
              </p>
              <p>
              fashionhub@yojna.fun
                <br />
                {/* +91 9723663239 */}
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
