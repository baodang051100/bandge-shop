import { collection, query } from 'firebase/firestore';
import "./Products.scss";
import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/firebase';
import { getDocs } from 'firebase/firestore';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slice/cardSlice';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = async () => {
        const q = query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        setProducts(data)
    };

    useEffect(() => {
        userData();
    })

    const handleAddToCart = (products) => {
        dispatch(addToCart(products))
        navigate("/cart")
    }

    return (
        <section className='product'>
            <div className="title"><h1>All Product</h1></div>
            <div className="card">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {products.map((items, id) => {
                        return (
                            <Grid item xs={2} sm={4} md={4} key={id}>
                                <div className='product-item'>
                                    <Card sx={{ maxWidth: 450 }}>
                                        <CardMedia
                                            sx={{ height: 300 }}
                                            image={items.imgUrl}
                                            title="img product"
                                        />
                                        <CardContent>
                                            <Typography>{items.title}</Typography>
                                            <Typography>Description: {items.description}</Typography>
                                            <Typography>Category: {items.category}</Typography>
                                            <Typography>Price: {items.price}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                variant='contained'
                                                color='error'
                                                onClick={() => handleAddToCart(items)}
                                            >
                                                ADD TO CARD
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </section>
    )
}

export default Products