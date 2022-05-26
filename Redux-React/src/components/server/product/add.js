import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCategories } from '../../../features/CategorySlice'
import { addProduct } from '../../../features/ProductSlice'
import { toast } from 'react-toastify';
import './css/form.css'


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const categories = useSelector(data => data.category.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const onSubmit = async (data) => {
        dispatch(addProduct(data))
        toast.success(' Sucessfully!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setTimeout(() => {
            navigate('/admin/product')
        }, 2000) 
        
      };
  return (
    <div>
        <div>
            <h2>AddProduct new product</h2>
        </div>
        
        <div className='form-add'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <legend>Form title</legend>
                <div className="form-group">
                    <label htmlFor>Name</label>
                    <input type="text" className="form-control" {...register('name', { required: true})} placeholder="Name..." />
                    {errors.name && <span>Vui lòng nhập tên sản phẩm</span>}
                </div>
                <div className="form-group">
                    <label htmlFor>Price</label>
                    <input type="number" className="form-control" {...register('price', { required: true})} placeholder="Price..." />
                    {errors.price && <span>Khong duoc de trong</span>}
                </div>
                <div className="form-group">
                    <label htmlFor>Quantity</label>
                    <input type="number" className="form-control" {...register('quantity', { required: true, min: 1 })} placeholder="Quantity..." />
                    {errors.quantity === "required" && <span>Khong duoc de trong</span>}
                </div>
                <div className="form-group">
                    <label htmlFor>Branch</label>
                    <input type="text" className="form-control" {...register('branch', { required: true })} placeholder="Branch..." />
                    {errors.branch && <span>Khong duoc de trong</span>}
                </div>
                <div className="form-group">
                    <label htmlFor>Description</label>
                    <textarea {...register('description', { required: true})} id="input" class="form-control" rows="3"></textarea>
                    {errors.description && <span>Khong duoc de trong</span>}
                </div>
                <div className="form-group">
                    <label htmlFor>Category</label>
                    <select class="form-control" {...register('category')}>
                        {categories.map((item, index) => (
                            <option value={item._id} key={index}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddProduct