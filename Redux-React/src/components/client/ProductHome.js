import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getLimit } from '../../api/product';
import { getProducts } from '../../features/ProductSlice';
import './css/product.css'

const ProductHome = () => {

    const [product, setProduct] = useState([])
    const products = useSelector(data => data.product.value);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    const getLimitProduct = async () => {
        const { data } = await getLimit(4)
        setProduct(data)
    }

    useEffect(() => {
        getLimitProduct()
    }, [])
  return (
        <div className="container">
            <div>
                <div className='title'>
                    <p>Our Products</p>
                    <span>Add our products to weekly line up</span>
                </div>
                <div className="row row-product">
                        {products.map((item, index) => (
                            <div class="col-3">
                                <div key={index} className="cart">
                                    <img src="https://cdn.pixabay.com/photo/2022/05/21/11/46/frog-7211336_1280.png" className="cart-img-top" alt="..." />
                                    <div className="cart-body">
                                        <h5 className="cart-title">{item.name}</h5>
                                        <p className="cart-text">{item.price}</p>
                                        <Link to={item.slug + "/detail-product"} className="btn btn-primary">View more</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div>
                <div className='title'>
                    <p>New Arrivals</p>
                    <span>Add new products to weekly line up</span>
                </div>
                <div className="row row-product">
                        {products.map((item, index) => (
                            <div class="col-3">
                                <div key={index} className="cart">
                                    <img src="..." className="cart-img-top" alt="..." />
                                    <div className="cart-body">
                                        <h5 className="cart-title">{item.name}</h5>
                                        <p className="cart-text">{item.price}</p>
                                        <Link to={item.slug + "/detail-product"} className="btn btn-primary">View more</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        
  )
}

export default ProductHome