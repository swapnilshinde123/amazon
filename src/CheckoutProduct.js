import React from 'react';
import "./CheckoutProduct.css";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,title,image,price,rating,ratingHalf }) {
    const [{basket},dispatch] = useStateValue();
  
    const removeformBasket = () =>{
         dispatch ({
            type : "REMOVE_FORM_BASKET",
          
              id:id,
              
        });
   };
    return (
        <div className="checkoutProduct">
            <img  className ="checkoutProduct_image"src={image}/>

            <div  className="checkoutProduct_info">
                <p  className="checkoutProduct_title">{title}</p>
               
                <div className="checkoutProduct_rating">
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
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeformBasket} className="remove_but">Remove form Card </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
