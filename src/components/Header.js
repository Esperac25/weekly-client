import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default class Header extends Component{
    render(){
        return(
            <header>
                <section className='header-container'>
                <Link to='/' className='header-link'>
                    <h1 className='header-logo'>
                       Weekly!
                    </h1>
                </Link>
                </section>
                <NavBar />
            </header>
        );
    };
};