import React from 'react';
import styles from "./Home_product.module.scss";
import doubleSofa01 from "../../../assets/double-sofa-01.jpg";
import nftConsole from "../../../assets/nft-console.jpg";
import wireless01 from "../../../assets/wireless-01.jpg";
import laptopAsus from "../../../assets/laptop-asus.jpg";
import macbook from "../../../assets/macbook-pro-m1.jpg";
import flycam from "../../../assets/flycam-DJI-avata.jpg";
import heroImg from "../../../assets/hero-img.jpg";
import phone03 from "../../../assets/phone-03.jpg";
import { Link } from 'react-router-dom';

const HomeProduct = () => {

    return (
        <div className={styles.home_items_product}>
            <div className={styles.product}>
                <div className={styles.product_title}>
                    <h3>Featued Products</h3>
                    <h2>BESTSELLER PRODUCTS</h2>
                    <p>Problems trying to resolve the conflict between</p>
                </div>
                <div className={styles.product_items}>
                    <div className={styles.frist}>
                        <div className={styles.fristItems}>
                            <img src={doubleSofa01} alt=''></img>
                            <div className={styles.content}>
                                <h3>Double Sofa</h3>
                                <span>English Department</span>
                                <div className={styles.price}>
                                    <p className={styles.price_df}>$16.48</p>
                                    <p className={styles.price_sale}>$6.48</p>
                                </div>
                                {/* <div><FaCircle /><FaCircle /><FaCircle /><FaCircle /></div> */}
                            </div>
                        </div>
                        <div className={styles.fristItems}>
                            <img src={nftConsole} alt=''></img>
                            <div className={styles.content}>
                                <h3>Gaming NFT Console</h3>
                                <span>English Department</span>
                                <div className={styles.price}>
                                    <p className={styles.price_df}>$16.48</p>
                                    <p className={styles.price_sale}>$6.48</p>
                                </div>
                                {/* <div><FaCircle /><FaCircle /><FaCircle /><FaCircle /></div> */}
                            </div>
                        </div>
                        <div className={styles.fristItems}>
                            <img src={wireless01} alt=''></img>
                            <div className={styles.content}>
                                <h3>Wireless</h3>
                                <span>English Department</span>
                                <div className={styles.price}>
                                    <p className={styles.price_df}>$16.48</p>
                                    <p className={styles.price_sale}>$6.48</p>
                                </div>
                                {/* <div><FaCircle /><FaCircle /><FaCircle /><FaCircle /></div> */}
                            </div>
                        </div>
                        <div className={styles.fristItems}>
                            <img src={laptopAsus} alt=''></img>
                            <div className={styles.content}>
                                <h3>Laptop Asus</h3>
                                <span>English Department</span>
                                <div className={styles.price}>
                                    <p className={styles.price_df}>$16.48</p>
                                    <p className={styles.price_sale}>$6.48</p>
                                </div>
                                {/* <div><FaCircle /><FaCircle /><FaCircle /><FaCircle /></div> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.secondItems}>
                            <img src={macbook} alt=''></img>
                            <div className={styles.content}>
                                <h3>Macbook Pro M1</h3>
                                <span>English Department</span>
                                <div className={styles.price}>
                                    <p className={styles.price_df}>$16.48</p>
                                    <p className={styles.price_sale}>$6.48</p>
                                </div>
                                {/* <div><FaCircle /><FaCircle /><FaCircle /><FaCircle /></div> */}
                            </div>
                        </div>
                        <div className={styles.secondItems}>
                            <img src={flycam} alt=''></img>
                            <div className={styles.content}>
                                <h3>Flycam DJI Avata</h3>
                                <span>English Department</span>
                                <div className={styles.price}>
                                    <p className={styles.price_df}>$16.48</p>
                                    <p className={styles.price_sale}>$6.48</p>
                                </div>
                                {/* <div><FaCircle /><FaCircle /><FaCircle /><FaCircle /></div> */}
                            </div>
                        </div>
                        <div className={styles.secondItems}>
                            <img src={heroImg} alt=''></img>
                            <div className={styles.content}>
                                <h3>Single Sofa</h3>
                                <span>English Department</span>
                                <div className={styles.price}>
                                    <p className={styles.price_df}>$16.48</p>
                                    <p className={styles.price_sale}>$6.48</p>
                                </div>
                                {/* <div><FaCircle /><FaCircle /><FaCircle /><FaCircle /></div> */}
                            </div>
                        </div>
                        <div className={styles.secondItems}>
                            <img src={phone03} alt=''></img>
                            <div className={styles.content}>
                                <h3>Phone</h3>
                                <span>English Department</span>
                                <div className={styles.price}>
                                    <p className={styles.price_df}>$16.48</p>
                                    <p className={styles.price_sale}>$6.48</p>
                                </div>
                                {/* <div><FaCircle /><FaCircle /><FaCircle /><FaCircle /></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.loadMoreProducts}>
                    <div className={styles.load_more} style={{ color: "blue" }}>
                        <Link to="/products">LOAD MORE PRODUCTS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProduct