
import "./Contacts.css";
import contactFrame from "./images/portfolio-frame.jpg";

const Contact = () => {
  return (
    <div>
      <h1 className="contact-heading" id="contact">CONTACT ME</h1>
      <img className="contactFrame" src={contactFrame} alt="line-star-line" />

      <div className="form-container">
        <form className="register-form">
          
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          
          <textarea
            id="message"
            className="form-field"
            type="text"
            placeholder="Message"
            name="message"
            rows="3"
            cols="33"
          />
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
