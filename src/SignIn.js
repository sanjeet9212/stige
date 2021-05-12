import React, {useState} from 'react'
import './SignIn.css';
import {Link} from 'react-router-dom';
import {auth} from './firebase.js';
import {useHistory} from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (event) =>{
        event.preventDefault();
        console.log(auth)

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
        })
        .catch((e) => {
            if (
                e.message ===
                "The password is invalid or the user does not have a password."
            ) {
                alert("Please check your credentials again");
            } else if (
                e.message ===
                "There is no user record corresponding to this identifier. The user may have been deleted."
            ) {
                alert("User Not Found");
            } else {
                alert(e.message);
            }
        })
    }

    return (
        <div className='sign-in'>
            <div className='sign-in-up'>
                <div className='login'>
                    <center>
                    <Link to="/sign-in">
                        <h2>SIGN IN</h2>
                    </Link>
                    </center>
                </div>
                <div className='logout'>
                    <center>
                    <Link to="/register">
                        <h2>SIGN UP</h2>
                    </Link>
                    </center>
                </div> 
            </div>
            <div className="sign-in_container">
                <h1>Sign In to your Account</h1>
                <form>
                <center>
                    <input onChange = {(e) => setEmail(e.target.value)} type='email' placeholder='Email Address' />
                </center> 
                <center> 
                    <input onChange = {(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                </center>   
                <center>
                    <button type='submit' onClick = {login} className='sign-in_button'>SIGN IN</button>
                </center>
                <center>
                    <h6>Forgotten Password</h6>
                </center>
                <center>
                    <hr/>
                </center>
                <center>
                    <Link to="/register">
                        <div className="create-account">
                        Sign in with your organization
                        </div>
                    </Link>
                </center>
                </form>

            </div>
            
        </div>
    )
}

export default SignIn
