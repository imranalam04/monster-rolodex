import React from "react";
import './card-list.styles.css'
import Card from "../card.component";

const Cardlist = ({monsters}) =>  {
    // const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {    
        //   return <h1 key={monster.id}>{monster.name}</h1>;
        return <Card monster={monster}/>
        })}
      </div>
    );
  }

export default Cardlist;
