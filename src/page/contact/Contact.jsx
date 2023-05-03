import React, { useRef } from 'react';
import styles from "./Contact.module.scss";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bp2e8pk', 'template_qtnbb1r', form.current, 'Bk-6_aE6HeAeIy_Hy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact_title}>
        <h1>Contact Us</h1>
        <span>Any question or remarks? Just write us a message!</span>
      </div>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <section>
            <div className={styles.left_container_title}>
              <h3>Contact Infomation</h3>
              <span>Say Something to start a live chat</span>
            </div>
            <div className={styles.left_container_info}>
              <ul>
                <li>
                  <PhoneInTalkIcon />
                  <span>+1012 3456 789</span>
                </li>
                <li>
                  <EmailIcon />
                  <span>demo@gmail.com</span>
                </li>
                <li>
                  <LocationOnIcon />
                  <span>132 DartMouth Street Boston, Massachusetts 02156 United States</span>
                </li>
              </ul>
            </div>
            <div className={styles.left_container_links}>
              <button><TwitterIcon /></button>
              <button><InstagramIcon /></button>
              <button><FacebookIcon /></button>
            </div>
          </section>
        </div>
        <div className={styles.right_container}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.input}>
              <div className={styles.input_left}>
                <label>First Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
              </div>
              <div className={styles.input_right}>
                <label>Last Name</label>
                <input type="text" />
                <label>Phone Number</label>
                <input type="text" value="+1012 3456 789" />
              </div>
            </div>
            <div className={styles.checkBox}>
              <h4>Select Subject?</h4>
              <input type="checkbox" />
              <label>General Inquiry</label>
              <input type="checkbox" />
              <label>General Inquiry</label>
              <input type="checkbox" />
              <label>General Inquiry</label>
              <input type="checkbox" />
              <label>General Inquiry</label>
            </div>
            <div className={styles.message}>
              <label>Message</label>
              <input type="text" placeholder='Write you message...' />
            </div>

            <div className={styles.btn}>
              <Button variant='contained'
                style={{
                  background: "#000000",
                  width: "10vw",
                  height: "5vh",
                  alignItems: "center"
                }}
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
