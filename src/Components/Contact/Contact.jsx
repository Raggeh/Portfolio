import { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const contentRef = useRef();
  const firstInputRf = useRef();
  const [sent, setSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
 

    emailjs
      .sendForm(
        "service_mgt4lj3",
        "template_4hbk8h2",
        form.current,
        "XSrF3GsnloKT50YpZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);   
           contentRef.crrent.value = "";
           firstInputRf.current.focus();
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="">
      <div className="w-left">
        <div className="awesome">
          <span> Get in touch</span>
          <span> Contact Me </span>
          <div
            className="blur c-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            ref={firstInputRf}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            ref={contentRef}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
           
          />
          <input
            type="submit"
            value="send"
            className="button i-btn"
            
          />
          <span className="sent">{sent && " Thanks for contacting me! "}</span>
          <div className="blur c-blur" style={{ background: "purple" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
