import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <footer>
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.get_touch}>
          <h3>Get In Touch</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <FacebookIcon sx={{width: "3.5rem", height: "3.5rem", padding: "0.5rem"}} /> 
          <InstagramIcon sx={{width: "3.5rem", height: "3.5rem", padding: "0.5rem"}} /> 
          <TwitterIcon sx={{width: "3.5rem", height: "3.5rem", padding: "0.5rem"}} />
        </div>
        <div className={styles.company}>
          <h3>Company info</h3>
          <Link><p>About Us</p></Link>
          <Link><p>Carrier</p></Link>
          <Link><p>We are hiring</p></Link>
          <Link><p>Blog</p></Link>
        </div>
        <div className={styles.feartures}>
          <h3>Feartures</h3>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
      </div>
      <div className={styles.time}>
        &copy; {year} All Rights Reserved
      </div>
    </div>
    </footer>
  )
}

export default Footer;
