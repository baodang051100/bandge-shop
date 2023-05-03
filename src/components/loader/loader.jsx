import loaderImage from "../../assets/loader.gif";
import styles from "./loader.module.scss";
import { ReactDOM } from 'react';

const Loader = () => {
    return ReactDOM.createPortal (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img src={loaderImage} alt='loaderImage...'></img>
            </div>
        </div>,
        document.getElementById("loader")
    )
}

export default Loader