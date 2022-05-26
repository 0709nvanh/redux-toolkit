import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateCategory } from '../../../features/CategorySlice'
import { toast } from 'react-toastify';
import { readCate } from '../../../api/category'

const UpdateCate = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { slug } = useParams()

    useEffect(() => {
        const getCategory = async () =>{
            const { data } = await readCate(slug);
            console.log('first', data)
            reset(data[0])
        }
        getCategory()
    }, [slug])

    const onSubmit = (data) =>{
        dispatch(updateCategory(data));
        toast.success('Update Sucessfully!', {
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
    <div>
            <div className='form-add'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <legend>Edit category</legend>
                    <div className="form-group">
                        <label htmlFor>Name</label>
                        <input type="text" className="form-control" {...register('name', { required: true})} placeholder="Name..." />
                        {errors.name && <span>Vui lòng nhập tên sản phẩm</span>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    </div>
  )
}

export default UpdateCate