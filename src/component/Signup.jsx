import React from 'react';
import axios from 'axios'

export default function Signup() {
  const handleSubmit = (event) => { 
    event.preventDefault();
    const name = event.target[0].value;
    const number = event.target[1].value;
    const email = event.target[2].value;
    const password=event.target[3].value;

    console.log(name,number,email,password);
    axios.post("http://localhost:4000/signup",{name:name,number:number,email:email,password:password})
        .then(res => {
            console.log(res)
            alert(res.data.message)
        }).catch(e => {
            console.log(e);
        })
  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label className="labelHead">Name</label><br />
        <input type="text" className="inpStyle" /><br />

        <label className="labelHead">Phone Number</label><br />
        <input type="number" className="inpStyle" /><br />

        <label className="labelHead">Email address</label><br />
        <input type="email" className="inpStyle" /><br />

        <label className="labelHead">Password</label><br />
        <input type="password" className="inpStyle" /><br />

        <button className="bttnStyle" type="submit" >Signup</button>
      </form>
    </div>
  )
}
