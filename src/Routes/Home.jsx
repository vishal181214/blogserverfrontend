import React, { useEffect, useState } from 'react'
import Card from '../component/Card';
import axios from 'axios'
import Footer from '../component/Footer';
import Advertisement from '../component/Advertisement';

export default function Home() {
  let [allCard, setAllCard] = useState([]);
  useEffect(() => {
    getData()
  }, []);
  const getData = () => {
    axios.get('https://blogappnodeserver-production.up.railway.app/getallcard')
      .then((res) => {
        const data = res.data.output;
        setAllCard(data);
      })
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className='home'>
          {allCard.length > 0 ?
            allCard.slice(0, 4).map((n,index) => (<Card key={n._id} title={n.title} catogery={n.catogery} imgurl={n.imgurl} description={n.desc} />)) :
            "card not fount in this catogery"
          }
        </div>
        <Advertisement />
      </div>
      <Footer />
    </div>
  )
}
