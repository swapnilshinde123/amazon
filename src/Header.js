 import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from './logo.png';
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
function Header() {
  const [{basket, user},dispatch] = useStateValue();
  console.log(user)
  
  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  } 
  return (
    <div className="header">
      <Link to="/">
        <img  className="header_logo" src={logo} alt="amazon.logo"/> 
      </Link>
      
        

        <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">
           <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header_option">
                <span  className="header_optionLineOne"> Hello</span>
                <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <div  className="header_option">
                <span  className="header_optionLineOne"> Returns</span>   
                <span  className="header_optionLineTwo">& Orders </span>   
            </div>
            <div className="header_option">
                <span  className="header_optionLineOne"> Try</span>   
                <span  className="header_optionLineTwo">Prime </span>   
            </div>
        </div>
        <Link to="/checkout">
        <div className="header_optionBasket">
            <ShoppingCartIcon/>
            <span  className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>

    </div>    
  ); 
}

export default Header;
