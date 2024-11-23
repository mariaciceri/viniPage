import React from "react";
import "../styles/contactForm.css";

export default function ContactForm() {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1>Contact</h1>
        <p>WhatsApp: 47 9 9678 0945</p>
        <h2>or</h2>
      </div>

      <div className="form">
        <div>
          <img src="/images/cleaning.jpeg" alt="" className="image" />
        </div>

        <form name="contact" method="POST" data-netlify="true">
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
