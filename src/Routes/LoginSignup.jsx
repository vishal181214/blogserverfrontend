import React from 'react'
import Login from '../component/Login';
import Signup from '../component/Signup';

export default function LoginSignup() {
  const [state, setState] = React.useState(true);
  return (
    <div className="same">
      <div className='loginsignup'>
        <button className='ls-btn l-btn' onClick={() => { setState(true) }}>Login</button>
        <button className='ls-btn s-btn' onClick={() => { setState(false) }}>Signup</button>
        {
          state ? <div className="login"><Login /></div> : <div className="signup"><Signup /></div>
        }
      </div>
    </div>
  )
}
