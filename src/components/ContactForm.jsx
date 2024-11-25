import React from "react";
import "../styles/contactForm.css";

export default function ContactForm() {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1>Contact</h1>
        <p>Please fill the form below and we will contact you.</p>
      </div>

      <div className="form">
        <div>
          <img
            src="/images/collection1/vini-saida18.jpeg"
            alt="Painting signature"
            className="image"
          />
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you"
        >
          {/* Hidden input for Netlify form processing */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-items">
            <input
              type="text"
              className="input-items"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-items">
            <input
              type="email"
              className="input-items"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-items">
            <textarea
              className="input-items text-area"
              name="message"
              placeholder="
Optional message"
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
