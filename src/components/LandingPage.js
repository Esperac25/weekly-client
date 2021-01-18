import React, { Component } from 'react';
import {Link } from 'react-router-dom';


export default class LandingPage extends Component{
    render(){
        return(
            <div>
              
                 <h2 className='welcome'>Welcome to Weekly!</h2>
                    <div className='box-2'>
                        <div className='landing-content'><p>Weekly was created to</p><p>provide users with a concise </p><p>way to plan their week</p></div>
                        <br/>
                        <div className='landing-content'><p>Easily add and delete</p> <p>items from your weekly view</p></div>
                        <br/>
                        <div className='landing-content'><p>To get started, simply click the </p><p>home tab to view your weekly </p><p>todo list, click the add tab to add</p><p> a new item.</p></div>
                    </div>
                    <div>
                    <ul className='landing-buttons'>
                        <li>
                        <button className='button' type='submit'><Link className='color-fix' to='/home'>Home</Link></button> 
                        </li>
                        <li>
                        <button className='button' type='submit'><Link to='/items/add-item' className='color-fix'>Add Item</Link></button>
                        </li>
                    </ul> 
                    </div>
                    
                
            </div>
                
        )
    }
}