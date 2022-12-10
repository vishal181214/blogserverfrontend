import React from 'react'

export default function Cards(props) {
    const {title,catogery,imgurl,description}=props
    return (
        <div className='card'>
            <div className="cardLeft">
                <img src={imgurl} alt='background'/><br />
                <button className='material-symbols-outlined d-btn delBtn'>delete</button>
                <button className='material-symbols-outlined e-btn editBtn'>edit</button>
            </div>
            <div className="cardRight">
                <h2 className="card-title">{title}</h2>                
                <p className="description">{description}</p>
            </div>
        </div>
    )
}
