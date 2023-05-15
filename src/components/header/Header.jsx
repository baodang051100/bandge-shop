import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogout, { ShowOnLogin } from '../hiddenLinks/hiddenLinks';
import { useSelector } from 'react-redux';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const logo = (
    <div className={styles.logo}>
        <Link to='/'>
            <h2>
                <span>Bandage</span>
            </h2>
        </Link>
    </div>
)
const Header = () => {

    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const user = useSelector((state) => state.auth);

    const cartElement = (
        <span className={styles.cart}>
            <Link to='/cart'>
                <Button variant='contained' className={styles.cartBtn}>
                    <ShoppingCartIcon />
                    {user.issLogIn === true ? (
                        <p>{cartTotalQuantity}</p>
                    ) : (
                        <p>0</p>
                    )}
                </Button>
            </Link>
        </span>
    )

    const [displayName, setDisplayName] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.displayName === null) {
                    const u1 = user.email.slice(0, -10);
                    const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                    setDisplayName(uName)
                } else {
                    setDisplayName(user.displayName)
                }
                dispatch(SET_ACTIVE_USER({
                    email: user.email,
                    userName: user.displayName ? user.displayName : displayName,
                    userId: user.uid,
                }))
            } else {
                setDisplayName("")
                dispatch(REMOVE_ACTIVE_USER())
            }
        });
    }, [dispatch, displayName]);

    const logOut = () => {
        signOut(auth).then(() => {
            toast.success("LogOut successfully!!!")
            navigate("/")
        }).catch((error) => {
            toast.error(error.message)
        });
    }

    const [click, setClick] = useState(false);


    return (
        <>
            <header>
                <div className={styles.header}>
                    <nav>
                        {logo}
                        <div className={styles.menu}>
                            <div className={styles.menuToggle}>
                                <Button
                                    onClick={() => setClick(!click)}
                                    className={styles.btnMenu}
                                >
                                    <span>Menu</span>
                                    {click ? <CloseIcon /> : <MenuIcon />}
                                </Button>
                            </div>
                            <ul
                                className={click ? `${styles.navMobile}` : `${styles.navItems}`}
                                onClick={() => setClick(false)}
                            >
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/contact'>Contact Us</Link></li>
                                <li><Link to='/products'>Shop</Link></li>
                            </ul>
                        </div>
                        <div className={styles.header_right}>
                            <span className={styles.links}>
                                <ShowOnLogin>
                                    <Link to='/login'>
                                        <Button variant='contained' className={styles.loginBtn}>
                                            <AccountCircleIcon />
                                            <p>Login</p>
                                        </Button>
                                    </Link>
                                </ShowOnLogin>
                                <ShowOnLogout>
                                    <FormControl sx={{ m: 1, minWidth: 150, border: "none" }} className={styles.formLogin}>
                                        <InputLabel sx={{ display: "flex", alignItems: "center" }}><AccountCircleIcon />Hi, {displayName}</InputLabel>
                                        <Select>
                                            <MenuItem><Link to="/user" style={{ textDecoration: "none", color: "black" }}>Profile</Link></MenuItem>
                                            <MenuItem><Link to="/admin" style={{ textDecoration: "none", color: "black" }}>Admin</Link></MenuItem>
                                            <MenuItem><Link to="/order_history" style={{ textDecoration: "none", color: "black" }}>My order</Link></MenuItem>
                                            <MenuItem><Link onClick={logOut} style={{ textDecoration: "none", color: "black" }}>Logout</Link></MenuItem>
                                        </Select>
                                    </FormControl>
                                </ShowOnLogout>
                            </span>
                            {cartElement}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;