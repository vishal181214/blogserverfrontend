import axios from 'axios';
import React from 'react';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    console.log(email, password);

    axios.post("http://localhost:4000/login",{email:email,password:password})
        .then(res => {
            console.log(res)
            if(res.data.key === 1){
              document.cookie = "token="+res.data.token+"; expires="+Date.now() + 1 * 24 * 60 * 60 * 1000;
              window.location.href = 'http://localhost:3000/'
            }else{
              alert(res.data.message);
            }
        }).catch(e => {
            console.log(e);
        })
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <label className="labelHead">Email</label><br />
        <input type="email"  className="inpStyle"/><br />

        <label className="labelHead">Password</label><br />
        <input type="password" className="inpStyle" /><br />

        <button className="bttnStyle" type="submit">Login</button>
      </form>
    </div>
  )
}
