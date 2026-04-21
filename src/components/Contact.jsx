import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0wcjfbn",
        "template_lnre8gd",
        form.current,
        "kNKfhJfsW8_yU8yDT"
      )
      .then(() => {
        setLoading(false);
        showToast("Message Sent Successfully!", "success");
        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        showToast("Failed to send message.", "error");
      });
  };

  const showToast = (msg, type) => {
    setToast({ show: true, message: msg, type: type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3500);
  };

  return (
    <section className="contact section-mask" id="contact">
      {/* Toast Notification Structure */}
      <div className={`toast-container ${toast.show ? "show" : ""} ${toast.type}`}>
        <div className="toast-content">
          <span className="toast-icon">
            {toast.type === "success" ? "✅" : "❌"}
          </span>
          <p>{toast.message}</p>
        </div>
        <div className="toast-progress"></div>
      </div>

      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        <div className="contact-left">
          <h3>Let's Work Together</h3>
          <p>Open to jobs, freelance work, and exciting opportunities.</p>
          <div className="contact-info">
            <div>✉️ anu042205as@gmail.com</div>
            <div>📱 +91 81234 50778</div>
            <div>📍 Mandya, Karnataka, India</div>
          </div>
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;