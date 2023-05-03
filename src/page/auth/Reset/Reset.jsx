import React, { useState } from 'react';
import styles from "./Reset.module.scss";
import resetImage from "../../../assets/forgot.jpg";
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebase/firebase';
import { toast } from 'react-toastify';

const Reset = () => {

    const [email, setEmail] = useState();

    const resetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Check your email for reset link!")
            })
            .catch((error) => {
                toast.error(error.message)
            });
    }

    return (
        <section className={styles.auth}>
            <div className={styles.img}>
                <img src={resetImage} alt=''></img>
            </div>
            <div className={styles.card}>
                <div className={styles.form}>
                    <h2>Reset Password</h2>
                    <form onSubmit={resetPassword}>
                        <input type='text' placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <button className={styles.btn_reset} type="submit">Reset Password</button>
                        <div className={styles.links}>
                            <p>
                                <Link to="/login">- Login</Link>
                            </p>
                            <p>
                                <Link to="/register">- Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Reset