import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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
    toast('Welcome!')
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in to get support</p>

        <section className='form'>
          <form onSubmit={onSubmit}>
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
              <button className='btn btn-block'>Submit</button>
            </div>
          </form>
        </section>
      </section>
    </>
  )
}

export default Login
