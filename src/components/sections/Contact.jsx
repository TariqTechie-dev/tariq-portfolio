import { useState } from "react";

const CONTACT_EMAIL = "tariqhussain.webdev@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`;
    const composeWindow = window.open(gmailLink, "_blank", "noopener,noreferrer");

    if (composeWindow) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }

    setSubmitMessage(
      composeWindow
        ? "Gmail compose is open in a new tab. Please send the prepared message from there."
        : "Please allow pop-ups for this site, then try again."
    );
  };

  return (
    <section id="contact" className="bg-slate-950 px-4 py-16 text-slate-50 transition-colors duration-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <h2 className="text-center text-3xl font-bold text-slate-50 sm:text-4xl">Contact Me</h2>
        <p className="mt-4 max-w-2xl text-center text-sm leading-7 text-slate-400 sm:text-base">
          Feel free to reach out about opportunities, questions, or collaboration.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-black/20 sm:p-8">
          <h3 className="mb-6 text-2xl font-semibold text-slate-50">Send Me a Message</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="contact-name">Your name</label>
              <input id="contact-name" type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-cyan-400" />
            </div>
            <div>
              <label className="sr-only" htmlFor="contact-email">Your email address</label>
              <input id="contact-email" type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-cyan-400" />
            </div>
          </div>

          <label className="sr-only" htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="mt-4 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-cyan-400" />

          <label className="sr-only" htmlFor="contact-message">Your message</label>
          <textarea id="contact-message" name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required className="mt-4 w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-cyan-400" />

          <button type="submit" className="mt-5 w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Send Message
          </button>

          {submitMessage && <p className="mt-4 text-center text-sm text-cyan-400" role="status">{submitMessage}</p>}

          <p className="mt-4 text-center text-sm text-slate-400">
            Prefer Gmail? {" "}
            <a className="font-medium text-cyan-400 hover:text-cyan-300" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`} target="_blank" rel="noreferrer">Open Gmail</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
