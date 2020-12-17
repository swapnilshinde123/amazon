import React from 'react';
import './product.css';
import {useStateValue} from "./StateProvider";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
function Product({id,title,image,price,rating,ratingHalf}) {
  const [{basket},dispatch] = useStateValue();
  
  const addToBasket = () =>{
       dispatch ({
         type : "ADD_TO_BASKET",
         item:{
           id:id,
           title:title,
           image:image,
           rating:rating,
           ratingHalf:ratingHalf,
           price:price,
         },
       });
  };
  return (
    <div className="product">
    <div className="product_info"> 
       
       <p className="title">{title}</p>
      
       
     
       <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_, i)=>(
                <p> <StarIcon/></p>
            ))}
            {Array(ratingHalf)
            .fill()
            .map((_, i)=>(
                <p> <StarHalfIcon/></p>
            ))}
       </div>
       <img src={image } alt=""/>
         <p className="product_price">
           <small>$</small>
           <strong>{price}</strong>
       </p>
       <button onClick={addToBasket}>Add to card</button>
    </div>
    
    </div>
  );
}

export default Product
