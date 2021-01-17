import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class NavBar extends Component{
  
    render(){
       return(
           <div>
               <Link to='/about'>About</Link>
               <Link to='/home'>Home</Link>
               <Link to='/items/add-item'>Add Item</Link>
           </div>
       )
}
}