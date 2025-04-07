import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email service)
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>macdonaldmuhavi98@gmail.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>+254 (074) 0940-735</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Nairobi, Kenya</span>
            </div>
            <div className="social-links">
              <a href="https://github.com/macdonald34" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/macdonald-muhavi-90178928b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/makithe_maky/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;