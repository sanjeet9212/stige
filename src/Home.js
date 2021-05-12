import React from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from './firebase.js';
import './Home.css';

function Home({user}) {
    const history = useHistory('');

    if (user === false) {
        history.push("/sign-in")
    }

    const logout = (event) => {
        event.preventDefault();
        auth.signOut();
        history.push("/sign-in");
    }

    return (
        <div className='home'>
            <div className='home_container'>
            <center>
                <span>Hello,  {user?.displayName}</span>
            </center>
            <center>
                <p className='logout' onClick={logout}>Log Out</p>
            </center>
            </div>
        </div>
    )
}

export default Home
