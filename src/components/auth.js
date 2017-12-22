import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Auth extends Component {

    render() {
        return (
            <div>
                <div className='home_main'>
                    <img className='home_icon' src='./auth_logo.png'/>
                    <p>Username</p>
                    <textarea className='auth_text_box'/>
                    <p>Password</p>
                    <textarea className='auth_text_box'/>

                    <Link to='/dashboard'><button className='loginbtn'>Login</button></Link>
                    <button className='regbtn'>Register</button>
                </div>
                Home content
            </div>
        )
    }
}