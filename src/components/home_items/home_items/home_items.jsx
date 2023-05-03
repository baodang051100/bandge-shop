import React from 'react';
import styles from "./home_items.module.scss";
import { Button } from '@mui/material';
import chair from "../../../assets/arm-chair-01.jpg";
import phone from "../../../assets/phone-01.jpg";
import watch from "../../../assets/watch-01.jpg";
import wireless from "../../../assets/wireless-01.jpg";

const HomeItems = () => {
    return (
        <section className={styles.home_items_editor}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3>EDITOR'S PICK</h3>
                    <p>Problems trying to resolve the conflict between</p>
                </div>
                <article>
                    <div className={styles.left_image}>
                        <img src={chair} alt='chair' className={styles.chair}></img>
                        <div className={styles.chair_content}>
                            <Button variant='outline' sx={{ background: "white" }}>CHAIR</Button>
                        </div>
                        <img src={phone} alt='phone' className={styles.phone}></img>
                        <div className={styles.phone_content}>
                            <Button variant='outline' sx={{ background: "white" }}>PHONE</Button>
                        </div>
                    </div>
                    <div className={styles.image_right}>
                        <img src={watch} alt='watch' className={styles.watch}></img>
                        <div className={styles.watch_content}>
                            <Button variant='outline' sx={{ background: "white" }}>WATCH</Button>
                        </div>
                        <img src={wireless} alt='wireless' className={styles.wireless}></img>
                        <div className={styles.wireless_content}>
                            <Button variant='outline' sx={{ background: "white" }}>WIRELESS</Button>
                        </div>
                    </div>
                </article>
            </div>
        </section >
    )
}

export default HomeItems