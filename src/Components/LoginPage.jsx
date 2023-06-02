import React, {useState} from 'react'
import Header from '../Assests/header.png'
import './loginpage.css'
import View from '../Assests/view.png'

function LoginPage() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState(false);
  
   const handleForm = (e) =>{
    e.preventDefault();
    if(email.length === 0 || password.length === 0){
      setError(!error)
    }
   }
  return (  
    <form onSubmit={handleForm}>
    <div className='heading'>
        <img  src={Header} alt='Header'  className='header'/>
        <input className='inputField'
         placeholder='Enter your email' 
         name='email'
         value={email}
          onChange={(e) => setEmail(e.target.value)} 
         />
          <br/>
        {(error &&  !email.includes('@')) || (error &&  email.length <= 3) ? 
        <label>Please Enter valid Email and include '@'</label> : ''}

       
        <input className='inputField' placeholder='Enter your password' 
        name='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <img className='view' alt='View' src={View}/>
        <br/>
        {(error && password.length <= 0) ||  (error && password.length <= 3) ? 
      <label>Password should be morethan  3 characteristics</label> : ''}
        <p className='password'>Forgot Password?</p>
        <button className='btn' >Log In</button>
        <div className='acountinfo'>
            <span>Don’t have an account yet?</span> 
            <span className='signup'> Sign Up</span>
        </div>
    </div>
    </form>
   
  )
}

export default LoginPage