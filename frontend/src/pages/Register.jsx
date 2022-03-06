import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {toast} from 'react-toastify'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '', // for confirming password
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      // 呢度唔明
    }))
    // console.log(formData)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match')
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>

        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                // 呢度唔明
                value={name}
                onChange={onChange}
                placeholder='Enter your name'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                // 呢度唔明
                value={email}
                onChange={onChange}
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                // 呢度唔明
                value={password}
                onChange={onChange}
                placeholder='Enter password'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='password2'
                name='password2'
                // 呢度唔明
                value={password2}
                onChange={onChange}
                placeholder='Confirm password'
                required
              />
            </div>
            <div className='form-group'>
              <button className='btn btn-block'>Submit</button>
            </div>
          </form>
        </section>
      </section>
    </>
  )
}

export default Register
