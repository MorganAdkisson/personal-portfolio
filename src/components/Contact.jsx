import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"

const Contact = () => {
    const form = useRef()

    const handleSendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJSSERVICEID, process.env.REACT_APP_EMAILJSTEMPLATEID, form.current, process.env.REACT_APP_EMAILJSKey)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

        e.target.reset();
    }

    return (
        <section id="contact" className="section-container">
            <div className="glassmorphism contact-form_container">
            <h2>Contact</h2>
            <p>My inbox is always open for anyone to inquire about a project, job opportunities, or just to drop in and say hi. Feel free to shoot me an email here and I'll be sure to get back to you soon!</p>
                <form ref={form} onSubmit={handleSendEmail} className="contact-form">
                    <input  
                        type="text" 
                        placeholder="Full Name" 
                        name="user_name" 
                        required
                        />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="user_email" 
                        required
                        />
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        name="subject" 
                        required 
                        />
                    <textarea
                        name="message" 
                        cols="30" rows="10"
                        />
                    <button 
                        type="submit" 
                        className="contact_submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;