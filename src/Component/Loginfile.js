import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Loginfile(props) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('username', user);
    console.log('password', pass);

    setUser('');
    setPass('');

    if (user === 'varsha' && pass === '123456') {
      navigate('/Home');
    } 
    else{
        navigate("/");
    }
    
    // ifelse {
    //   alert('Incorrect Password. Please try again.');
    // }
  };

  return (
    <div className='container'>
      <div className='input-Container'>
        <div className='text'> Sign up</div>
        <div className='underline'></div>
      </div>
      <div className='Inputs'>
        <div className='input'>
          <i className='fa-solid fa-user'></i>
          <input
            type='text'
            placeholder='Enter UserName'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label>Enter Password</label>
        </div>
        <div className='input'>
          <i className='fa-solid fa-lock'></i>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter Password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <span className='flex justify-around items-center' onClick={handleToggle}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size='lg' />
          </span>
         
        </div>
        <div className='input'>
          <button type='button' className='btn btn-primary' onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
 export default Loginfile;