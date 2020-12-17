import React from 'react';
import './Checkout.css';
import  Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket ,user},dispatch] = useStateValue();

  return (
    <div className="checkout">
       <div className="checkout_left">
          <img  className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/NocostEMI/IBD/revised/NCE12_InstantDiscount_1500x300_17jan.jpg" alt=""/>
          
          <div >
            <h3>hello,{user?.email}</h3>
             <h2 className="checkout_title">
               Your shopping Card

             </h2>
             {basket.map(item =>(
               <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               rating={item.rating}
               ratingHalf={item.ratingHalf}
               price={item.price}/>
             ))}
          </div>
         
        </div>

        <div className="checkout_right">
        <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"></img>
            <Subtotal/>
          </div>
    </div>
  );
}

export default Checkout;
