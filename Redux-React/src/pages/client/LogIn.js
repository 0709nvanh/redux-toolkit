import React from 'react'
import Banner from '../../components/client/Banner'
import { useForm } from 'react-hook-form'
import './css/sign-up.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logIn } from '../../features/authSlice'
import { toast } from 'react-toastify';

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        dispatch(logIn(data))
        .then(res => {
            if(res.payload.user){
                navigate("/")
            }
        })
        .catch(error => {
                toast.error(' Sucessfully!', {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
        })
    }

  return (
    <div>
        <Banner />
        <div className='container'>
            <div class="form">
                <div className='title'>
                    <h3>Dang nhap tai khoan</h3>
                </div>
                <div className='sign-up'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <legend>Dang nhap</legend>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email...' {...register('email', { required: true})}/>
                            {errors.email && <span className='text-danger'>Vui lòng nhập email</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password...' {...register('password', { required: true})}/>
                            {errors.password && <span className='text-danger'>Vui lòng nhập passowrd</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn