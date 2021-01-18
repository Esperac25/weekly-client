import React from "react";
import "./App.css";
import { Route } from 'react-router-dom';
//components

import AddItem from "./AddItem";
import About from './About';
import Home from './Home';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Header from './Header';

export default function App(){
    return (
        <div className="container">
        <div className='app'>
            <Header />
            <Route path='/about' component={About}/>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={Home}/>
            <Route exact path='/items/add-item' component={AddItem}/>
            <Footer />
          </div>
        </div>
    );
}

