import React from 'react';
import './subtotal.css';
import {useStateValue} from "./StateProvider";
import CurrencyFromat from "react-currency-format";
import {getBasketTotal} from "./reducer";
function Subtotal() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFromat
      renderText={(value) =>(
          <>
            <p>
                Subtotal ( {basket.length} item ) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox"/> This order contain a gift

            </small>
            </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      <button> Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
