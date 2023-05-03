import React, { useState } from 'react';
import styles from "./Login.module.scss";
import LoginImage from "../../../assets/login.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/firebase'
import { toast } from 'react-toastify';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success("Login successfully....");
                navigate("/")
            })
            .catch((error) => {
                toast.error(error.message)
            });
    };

    //Login with google
    // -----create google provider-------
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success("Login successfully!!!")
                navigate("/")
            }).catch((error) => {
                toast.success(error.message)
            });
    }

    return (
        <>
            <section className={styles.auth}>
                <div className={styles.img}>
                    <img src={LoginImage} alt=''></img>
                </div>
                <div className={styles.card}>
                    <div className={styles.form}>
                        <h2>Login</h2>
                        <form onSubmit={login}>
                            <input type='text' placeholder='Email'
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required />
                            <input type='password' placeholder='Password'
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} required />
                            <button className={styles.btn_login} type="submit">Login</button>
                            <div className={styles.links}>
                                <Link to='/reset'>Forgot Password</Link>
                            </div>
                            <p>-- or --</p>
                        </form>
                        <button className={styles.btn_logingg} onClick={signInWithGoogle}><FaGoogle corlor="#fff" />Login With Google</button>
                        <span className={styles.register}>
                            <p>Don't have an account?</p>
                            <Link to='/register'>Register</Link>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login