import React, { useState } from 'react';
import styles from "./Register.module.scss";
import registerImage from "../../../assets/register.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault()
        console.log(registerEmail, registerPassword, confirmPassword);
        if (registerPassword !== confirmPassword) {
            toast.error("Password do not match!!!")
        } else {
            createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
                .then(
                    (userCredential) => {
                        const user = userCredential.user;
                        console.log(user)
                        toast.success("Registration Successfully....")
                        navigate("/")
                    })
                .catch((error) => {
                    toast.error(error.message)
                })
        }
    };

    return (
        <>
            <section className={styles.auth}>
                <div className={styles.card}>
                    <div className={styles.form}>
                        <h2>Register</h2>
                        <form onSubmit={register}>
                            <input type='text' placeholder='Email' value={registerEmail}
                                onChange={(e) => {
                                    setRegisterEmail(e.target.value);
                                }}
                                required />
                            <input type='password' placeholder='Password' value={registerPassword}
                                onChange={(e) => {
                                    setRegisterPassword(e.target.value);
                                }}
                                required />
                            <input type='password' placeholder='Confirm Password' value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }}
                                required />
                            <button className={styles.btn_register} type="submit">Register</button>
                        </form>
                        <span className={styles.login}>
                            <p>Aldready an account?</p>
                            <Link to='/login'>Login</Link>
                        </span>
                    </div>
                </div>
                <div className={styles.img}>
                    <img src={registerImage} alt=''></img>
                </div>
            </section>
        </>
    )
}

export default Register