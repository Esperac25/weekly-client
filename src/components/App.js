import React, { Fragment } from "react";
import "./App.css";
import { Route } from 'react-router-dom';
//components

import AddItem from "./AddItem";
import EditItem from './EditItem';
import About from './About';
import ListItems from './ListItems';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';

export default function App(){
    return (
        <div className="container">
        <div className='app'>
            <Header />
            <NavBar />
            <Route path='/about' component={About}/>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={ListItems}/>
            <Route exact path='/items/add-item' component={AddItem}/>
            <Route path='/edit-item/:id' component={EditItem}/>
            <Footer />
          </div>
        </div>
    );
}

