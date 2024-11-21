import React from "react";

export default function ContactForm() {
  return (
    <>
      <h1>Contact Me on:</h1>
      <p>WhatsApp: 47 9 9678 0945</p>
      <h2>OR</h2>
      <form name="contact" method="POST" data-netlify="true">
        {/* Hidden input for Netlify form processing */}
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
