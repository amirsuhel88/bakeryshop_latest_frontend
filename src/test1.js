import React from 'react'

function test1(){
    return(
        <div className=' d-flex justfy-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounder w-25'>
                <form action='' >
                    <div className='mb-3'>
                        <label htmlFor= "email"> Email</label>
                        <input type = "email" placeholder='Enter email'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor= "password"> Email</label>
                        <input type = "password" placeholder='Enter Password'/>
                    </div>
                    <button className='btn btn-success'>Login</button>
                    <p>You are agree to our terms and policies</p>
                    <button className='btn btn-default border'>Create account</button>
                </form>
            </div>

        </div>
    )

}

export default Login