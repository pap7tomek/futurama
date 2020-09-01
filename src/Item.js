import React from 'react';
import './Item.css';
function Item(props) {
    return (
      <div className="item" onClick={() =>{props.openModal(props.character)}}>
        <div className="imageContainer">
            <img className="image" src={props.character[0].image}></img>    
        </div>
        
        <div className="text"> 
            <p>{props.character[0].character}</p>
            <p>{props.character[props.character['quoteNumber']].quote}</p>
        </div>
        
      </div>
    );
  }
  
  export default Item;
  