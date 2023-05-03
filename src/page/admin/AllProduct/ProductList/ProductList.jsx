import React, { useState } from 'react';
import useGetData from '../../../../customHooks/useGetData';
import styles from "./ProductList.module.scss";
import { db, storage } from '../../../../firebase/firebase';
import { doc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import AddProduct from '../add_product/add_product';
import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputLabel, Modal, TextField, Typography } from '@mui/material';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const ProductList = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const { data: productsData, loading } = useGetData('products');

    const [productItem, setProductItem] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [uploadImg, setUploadImg] = useState(null);
    const [uuid, setId] = useState("");

    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, "products", id))
        toast.success("Deleted!")
    }

    const getData = (item) => {
        setProductItem(item);
        setId(item.id)
        console.log(item)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const storageRef = ref(storage, `productImage/${uploadImg.name}`);
            const uploadTask = uploadBytesResumable(storageRef, uploadImg).then(
                () => {
                    getDownloadURL(storageRef).then(function (url) {
                        setDoc(doc(db, "products", uuid), {
                            title: title,
                            description: description,
                            category: category,
                            price: price,
                            imgUrl: url,
                        })
                    })
                    toast.success("Product successfully added!");
                    setProductItem(uploadTask);
                }
            )
        } catch (err) {
            toast.error("Product failed updated");
        }
    }
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>List Product</h1>
                <div>
                    <Button
                        variant='contained'
                        color='success'
                        onClick={handleOpen}
                    >
                        Add Product
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <div className={styles.btnClose} style={{ textAlign: "right" }}>
                                <Button onClick={handleClose}>X</Button>
                            </div>
                            <AddProduct setOpen = {handleClose} />
                        </Box>
                    </Modal>
                </div>
            </div>
            <div className={styles.productList}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {loading ? (<h4 className='py-5 '>Loading...</h4>
                    ) : (
                        productsData.map((item, index) => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <div className={styles.productList_item}>
                                        <Card sx={{ maxWidth: 450 }}>
                                            <CardMedia
                                                sx={{ height: 300 }}
                                                image={item.imgUrl}
                                                title="img product"
                                            />
                                            <CardContent>
                                                <Typography>Id: {item.id}</Typography>
                                                <Typography>Title: {item.title}</Typography>
                                                <Typography>Description: {item.description}</Typography>
                                                <Typography>Category: {item.category}</Typography>
                                                <Typography>Price: ${item.price}</Typography>
                                            </CardContent>
                                            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                                <div>
                                                    <Button
                                                        variant='contained'
                                                        color='primary'
                                                        onClick={() => { setOpenUpdate(true); getData(item) }}
                                                    >
                                                        View
                                                    </Button>
                                                    <Modal
                                                        open={openUpdate}
                                                        onClose={() => setOpenUpdate(false)}
                                                        aria-labelledby="parent-modal-title"
                                                        aria-describedby="parent-modal-description"
                                                    >
                                                        <Box
                                                            sx={{ ...style, width: 400, }}
                                                        >
                                                            <div className={styles.btnClose} style={{ textAlign: "right" }}>
                                                                <Button onClick={() => setOpenUpdate(false)}>X</Button>
                                                            </div>
                                                            <div style={{ textAlign: "center", fontFamily: "Poppins", fontWeight: "700", fontSize: "2rem" }}>Update Product</div>
                                                            <div>
                                                                {productItem ? (
                                                                    <div>
                                                                        <form onSubmit={handleUpdate} className={styles.formUpdate}>
                                                                            <label>Title</label>
                                                                            <input type="text" defaultValue={productItem.title} name='title' onChange={(e) => setTitle(e.target.value)} />
                                                                            <label>Description</label>
                                                                            <input type="text" defaultValue={productItem.description} name='description' onChange={(e) => setDescription(e.target.value)} />
                                                                            <label>Category</label>
                                                                            <input type="text" defaultValue={productItem.category} name='category' onChange={(e) => setCategory(e.target.value)} />
                                                                            <label>Price</label>
                                                                            <input type="number" defaultValue={productItem.price} name='price' onChange={(e) => setPrice(e.target.value)} />
                                                                            <label>Image</label>
                                                                            <input type="file" id='file' name='img' accept='image/*' onChange={(e) => setUploadImg(e.target.files[0])} />
                                                                        </form>
                                                                    </div>
                                                                )
                                                                    : ("")}
                                                            </div>
                                                            <div className={styles.actionBtn} style={{ display: "flex", justifyContent: "space-between" }}>
                                                                <Button variant='contained' color='primary' type='submit' onClick={handleUpdate}>Update</Button>
                                                                <Button variant='contained' color='error' onClick={() => setOpenUpdate(false)}>Cancel</Button>
                                                            </div>
                                                        </Box>
                                                    </Modal>
                                                </div>
                                                <div>
                                                    <Button
                                                        variant='contained'
                                                        color='error'
                                                        onClick={() => deleteProduct(item.id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </CardActions>
                                        </Card>
                                    </div>
                                </Grid>
                            )
                        })
                    )}
                </Grid>
            </div>
        </section>
    )
}

export default ProductList;