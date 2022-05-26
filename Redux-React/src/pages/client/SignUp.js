import React from 'react'
import Banner from '../../components/client/Banner'
import { useForm } from 'react-hook-form'
import './css/sign-up.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Register } from '../../features/authSlice'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        dispatch(Register(data))
        navigate("/log-in")
    }
    
  return (
    <div>
        <Banner />
        <div className='container'>
            <div class="form">
                <div className='title'>
                    <h3>Dang ki tai khoan</h3>
                </div>
                <div className='sign-up'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <legend>Form title</legend>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                            <input type="text" className="form-control" placeholder='Enter your email...' {...register('name', { required: true })}/>
                            {errors.name && <span className='text-danger'>Vui lòng nhập username</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter your email...' aria-describedby="emailHelp" {...register('email', { required: true})}/>
                            {errors.email && <span className='text-danger'>Vui lòng nhập email</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder='Enter your password...' id="exampleInputPassword1" {...register('password', { required: true })}/>
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

export default SignUp