import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { read } from '../../api/product';
import { getRelated } from '../../features/ProductSlice';
import './css/detail.css'

const Detail = () => {
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const { slug } = useParams();
    // console.log(/)
    const dispatch = useDispatch()
    const products = useSelector(data => data.product.value)

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(slug)
            setProduct(data)
        }
        getProduct();

        if(product.category){
            dispatch(getRelated(product.category))
        }
    }, [dispatch, product.category, slug])
    
    const addToCart = (data) => {
        
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decreaseQuantity = () => {
        if(quantity<2){
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
    }
  return (
    <div>
        <div key={product.name}>
            <div className='container'>
                <div className='cart-detail'>
                    <div className='image-detail'>
                        <img src="https://cdn.pixabay.com/photo/2022/05/21/11/46/frog-7211336_1280.png" className="cart-img-top" alt="..." />
                    </div>
                    <div className='info-detail'>
                        <div className='info'>
                            <h3>{product.name}</h3>
                            <div className='price'>
                                <label>Price</label>
                                <span> {product.price}.00</span>
                            </div>
                            {/* <div className='price'>
                                <label>Quantity</label>
                                <span> {product.quantity}</span>
                            </div> */}
                            <p>Description: {product.description}</p>
                        </div>
                        <div className='button'>
                            <div className="icons">
                                <button type="button" onClick={() => decreaseQuantity()} class="btn btn-primary">-</button>    
                                <div className='input'>
                                    <input type="text" min="1" class="form-control quantity-form" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <button type="button" onClick={ () => incrementQuantity() } class="btn btn-primary">+</button>
                            </div>
                            <div className='btn'>
                                <button onClick={addToCart} type="button" class="btn btn-outline-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className='container'>
            <h3>San pham lien quan</h3>
            <div className="row row-product">
                {products.length> 0 && products.map((item, index) => (
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
        <div class="container mt-3">
            <h2>Comment</h2>
            {/* <p>Use the .form-control class to style textareas as well:</p> */}
            <form action="/action_page.php">
                <div class="mb-3 mt-3">
                <label for="comment">Comments:</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Detail

