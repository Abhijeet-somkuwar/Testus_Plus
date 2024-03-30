

import React from 'react';
import './ContactUs.css'; 
import img1 from '../assets/images/address.png';
import img2 from '../assets/images/contact.png';
import img3 from '../assets/images/email.png';
const ContactUs = () => {
  async function handleSubmit(e) {    //not working
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "982f3259-8e6a-4e3b-ab98-363ee2005b28",
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        }),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }                                                       //unable to make it working (backend)
  }
  return (
    <div className='container-1'>
    <div className="contact-us-container">
      <div className="location-section">
        <h2>Location:</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.220267212406!2d79.0881543149346!3d21.14663338587914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4a0f8c2d2a0a1%3A0x5b0f34dc4e7e81b8!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1634738578940!5m2!1sen!2sin"
          frameBorder="0"
          style={{ border: 0, width: '500px', height: '300px',borderRadius: '5%', alignContent: 'center', alignItems: 'center' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="contact-section">
        <div className="heading-with-icon">
          <img src={img1} alt="Address Icon" className="icon" />
          <h3>Address: </h3>
        </div>
        <p>House No 89, At VG Walni, Tal Nagbhid, Maharashtra, 441205</p>

        <div className="heading-with-icon">
          <img src={img2} alt="Contact Icon" className="icon" />
          <h3>Contact: </h3>
        </div>
        <p>(+91-9767052589) or (+91-9657671559)</p>

        <div className="heading-with-icon">
          <img src={img3} alt="Email Icon" className="icon" />
          <h3>Email: </h3>
        </div>
        <a href=" mailto:testusplus.co@gmail.com">testusplus.co@gmail.com</a>
      </div>
      
    </div>
    <div className='container-2'>
    <form action="" className='form' >
          <input type="text" name='name' placeholder="Full Name" />
          <input type="text" name='email' placeholder="Email Address" />
          <input type="text" name='subject' placeholder="Phone Number (Optional)" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type='submit'>Send</button>
        </form>


    </div>
    </div>
  );
};

export default ContactUs;
