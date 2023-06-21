import React from "react";
// import './card-list.styles.css'

 const Card = ({monster}) => { 
 
    const{name,email,phone,id} = monster;
    return (
      <div className="card-list">
        <div className="card-container" key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
        <h2>{name}</h2>
        <h3>{email}</h3>
        <h4>{phone}</h4>
        </div>
     
      </div>
    );
  }

export default Card;
