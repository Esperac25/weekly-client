import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class NavBar extends Component{
  
    render(){
       return(
           <div className='nav'>
           <ul className='nav'>
           <li><Link className='link' to='/about'>About</Link></li>
           <br></br>
           <li> <Link className='link' to='/home'>Home</Link></li>
           <br></br>
           <li><Link className='link' to='/items/add-item'>Add Item</Link></li>
           </ul>
           </div>
       )
}
}