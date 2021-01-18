import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class NavBar extends Component{
  
    render(){
       return(
           <div className='nav'>
           <ul>
           <li className='link'><Link to='/about'>About</Link></li>
           <br></br>
           <li className='link'> <Link to='/home'>Home</Link></li>
           <br></br>
           <li className='link'><Link to='/items/add-item'>Add Item</Link></li>
           </ul>
           </div>
       )
}
}