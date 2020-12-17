import React from 'react';
import './home.css';
import  Product from './Product';


function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img  className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" alt=""/>

            <div className="home_row m">
                <Product 
                  id="123456"
                  title="GOLDEN FASHION Barcelona Away KIT Half Sleeve with Messi Printed 2019-20"
                  price={399.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/41QGXmYLYmL.jpg"
                  rating={4}
                  ratingHalf={1}
                />
                
                <Product 
                  id="123457"
                  title="Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminium Case with Black Sport Band"
                  price={509.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/71WgOCvKwrL._SL1500_.jpg"
                  rating={5}
                  ratingHalf={0}
                />
                 <Product 
                  id="123458"
                  title="Nike Joyride Run Flyknit Men's Casual Running Shoes Aq2730-102"
                  price={699.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/71js37glRyL._UL1500_.jpg"
                  rating={4}
                  ratingHalf={1}
                />
                
              
               
            </div>

            <div className="home_row">
            <Product 
                  id="1234569"
                  title="Apple AirPods Pro"
                  price={779.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
                  rating={4}
                  ratingHalf={1}
                />
                
                <Product 
                  id="1234576"
                  title="Messi: Lessons in Style Hardcover – 4 October 2018"
                  price={499.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/61lmBGl7fvL.jpg"
                  rating={4}
                  ratingHalf={1}
                />
                 <Product 
                  id="1234575"
                  title="New Apple iPhone 12 Pro (256GB) - Graphite"
                  price={2099.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/71YlH-4MUQL._SL1500_.jpg"
                  rating={4}
                  ratingHalf={1}
                />
                
                <Product 
                  id="1234576"
                  title="Skore Fruit Basket Condoms - 40 Dotted & Flavoured Condoms (Orange, Chocolate, Banana & Strawberry) - 4 Packs (10 pieces per pack)"
                  price={19.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/71RobRfCqML._SL1500_.jpg"
                  rating={4}
                  ratingHalf={1}
                />
               
                
            </div>
            
            <div className="home_row">
            <Product 
                  id="12345788"
                  title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
                  price={899.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/81QuSDYlGHL._SL1500_.jpg"
                  rating={4}
                  ratingHalf={1}
                />
                 <Product 
                  id="12345734"
                  title="Nike WMNS Joyride Run Fk Sail/Cerulean-Pink Quartz-Barely Volt Women's Running Shoes - 4 UK (37.5 EU) 6.5 US AQ2731-103"
                  price={199.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/51KwAIHagOL._UX395_.jpg"
                  rating={4}
                  ratingHalf={1}
                />
                
            </div>
        </div>
    </div>
  );
}

export default Home;
 