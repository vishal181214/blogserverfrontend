import React from 'react';
import axios from 'axios';

export default function CreateCard() {
  const inputStyle = { width: "30vw", borderRadius: "5px", height: "30px", backgroundColor: "#FFFFFF", border: "2px solid tomato" };
  const lebalStyle = { fontSize: "20px", marginTop: "10px" };
  const textAreaStyle = { width: "30vw", borderRadius: "5px", height: "80px", backgroundColor: "#FFFFFF", border: "2px solid tomato" }

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const catogery = event.target[1].value;
    const imgurl = event.target[2].value;
    const desc = event.target[3].value;

    if (title && catogery && imgurl && desc) {
      axios.post("http://localhost:4000/createcard", { title: title, catogery: catogery, imgurl: imgurl, desc: desc })
        .then(res => {
          console.log(res)
          alert(res.data.message)
        })
      .catch(e => {
          console.log(e);
      })
    }
    else {
      alert("fill all the required data")
    }


  }
  return (
    <div className='same'>
      <form onSubmit={handleSubmit} className="createCard">
        <label className="labelHead">Title</label><br />
        <input type="text" className="inpStyle" placeholder="Enter Title of the blog"/><br />

        <label className="labelHead">Catogery</label><br />
        <input type="text" className="inpStyle" placeholder="should be in lowercase eg.bollywood"/><br />

        <label className="labelHead">Image url</label><br />
        <input type="text" className="inpStyle" placeholder="Enter image url..."/><br />

        <label className="labelHead">Description</label><br />
        <textarea className="inpStyle" placeholder='Enter your description' /><br />
        <button className="bttnStyle" type="submit" >Create Card</button>
      </form>
    </div>
  )
}
