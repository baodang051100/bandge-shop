import React, { useState } from 'react';
import styles from "./add_product.module.scss";
import { toast } from "react-toastify";
import { db, storage } from "../../../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';
import { Button } from '@mui/material/';

const AddProduct = ({ setOpen }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [productImage, setProductImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = collection(db, "products");
            const storageRef = ref(storage, `productImage/${productImage.name}`);
            const uploadTask = uploadBytesResumable(storageRef, productImage).then(
                () => {
                    getDownloadURL(storageRef).then(function (url) {
                        console.log(url);
                        addDoc(docRef, {
                            title: title,
                            description: description,
                            category: category,
                            price: price,
                            imgUrl: url,
                        })
                    })
                    toast.success("Product successfully added!");
                })
            console.log(uploadTask);
        } catch (error) {
            toast.error("Product failed added!");
        }
    };

    return (
        <section className={styles.addProduct}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3>ADD PRODUCTS</h3>
                </div>
                <form onSubmit={handleSubmit} autoComplete="off" className={styles.form_group} name="addProducts">
                    <label>Product Title</label>
                    <input type='text' placeholder='Title...'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required />
                    <label>Description</label>
                    <input type='text' placeholder='Description....'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required />
                    <div className={styles.cate_price}>
                        <label>Price</label>
                        <input type='number' placeholder='$100'
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required />
                        <label>Category</label>
                        <select value={category}
                            onChange={e => setCategory(e.target.value)}>
                            <option value="chair">Chair</option>
                            <option value="sofa">Sofa</option>
                            <option value="mobile">Mobile</option>
                            <option value="watch">Watch</option>
                            <option value="wireless">Wireless</option>
                            <option value="laptop">Laptop</option>
                            <option value="macbook">Macbook</option>
                            <option value="gaming machine">Gaming Machine</option>
                            <option value=" flycam">Flycam</option>
                        </select>
                    </div>
                    <label>Upload Image</label>
                    <input type='file' id="file" accept='image/*'
                        onChange={(e) => { setProductImage(e.target.files[0]) }}
                        required />
                </form>
                <div className={styles.btn}>
                    <Button
                        className="btn btn-primary"
                        type='submit'
                        id='addBtn'
                        onClick={handleSubmit}
                        variant='contained'
                        color='success'
                    >
                        Add Product
                    </Button>
                    <Button
                        className="btn btn-danger"
                        id="closeBtn"
                        variant='contained'
                        color='error'
                        onClick={setOpen}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AddProduct;
