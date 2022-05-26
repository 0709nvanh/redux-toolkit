import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCategory } from '../../../features/CategorySlice'
import { toast } from 'react-toastify';

const AddCate = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (data) =>{
        dispatch(addCategory(data));
        toast.success('Create Sucessfully!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setTimeout(() => {
            navigate('/admin/category')
        }, 2000) 
    }
  return (
    <div>AddCate
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddCate