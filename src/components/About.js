import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return(
            <div>
                <section>
                    <div>
                        <h2 className='about-label'>About Weekly!</h2>
                        <div className='box-2'>
                        <h3 className='about-label'>The Creator</h3>
                            <p>Hello and welcome to Weekly! </p>
                            <p>I am Esperanza Cardenas, a fullstack software engineer based in Seattle,WA.</p>
                            <p>One of the biggest challenges I ran into while learning software development was organizing and managing upcoming tasks.</p>
                            <p>Weekly was created to solve that issue and provide a simple way to manage the week.</p>
                        
                        </div>
                        <br></br>
                        <div className='box-2'>
                        <h3 className='about-label'>How it started</h3>
                            <p>Weekly was first created as a capstone project for my engineering immersion course, but now it is publicly available for everyone to use!</p>
                            <p>With Weekly, you can add items you need to complete in the upcoming week, edit the items, delete the items and reset the weekly view to start over for the next week.</p>
                            <p>Sign up now to start planning your week with Weekly!</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}