import React, { useEffect, useState } from 'react';
import Card from '../component/Card';
import axios from 'axios';
import Advertisement from '../component/Advertisement';
import Footer from '../component/Footer';

export default function Fitness() {
  let [allCard, setAllCard] = useState([]);
  useEffect(() => {
    axios.get('https://blogappnodeserver-production.up.railway.app/fitness')
      .then((res) => {
        const data = res.data.output;
        setAllCard(data);
      })
  }, []);
  return (
    <>
    <div style={{ display: "flex" }}>
    <div className='home'>
      {allCard.length > 0 ?
        allCard.map((n) => (<Card key={n._id} title={n.title} catogery={n.catogery} imgurl={n.imgurl} description={n.desc} />)) :
        "card not fount in this catogery"
      }
    </div>
    <Advertisement/>
    </div>
    <Footer/>
    </>
  )
}
