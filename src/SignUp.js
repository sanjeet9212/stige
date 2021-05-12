import React, {useState} from 'react'
import './SignUp.css';
import {auth} from './firebase.js';
import {Link, useHistory } from 'react-router-dom';

function SignUp() {
    const history=useHistory('');
    const [first, setFirst]=useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth.user) {
                    auth.user.updateProfile({
                        displayName: first + " " + last
                    }).then((s) => {
                        history.push("/sign-in")
                    })
                }
            })
            .catch((e) => {
                alert(e.message);
            })
    }

    return (
        <div className='sign-up'>
                <div className='signin-sign-in-up'>
                    <div className='signin-login'>
                        <center>
                        <Link to="/sign-in">
                            <h2>SIGN IN</h2>
                        </Link>
                        </center>
                    </div>
                    <div className='signin-logout'>
                        <center>
                        <Link to="/register">
                            <h2>SIGN UP</h2>
                        </Link>
                        </center>
                    </div> 
                </div>
            <div className='sign-up_container'>
                <h1>Create your Account</h1>
                <form>
                <center>
                    <input type='name' onChange={(e) => setFirst(e.target.value)} placeholder='First Name'/>
                </center>
                <center>
                    <input type='name' onChange={(e) => setLast(e.target.value)} placeholder='Last Name'/>
                </center>
                <center>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email Address'/>
                </center>
                <center>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                </center>
                <center>
                <p className='sign-up_policy'>
                    By Clicking Sign Up. you agree to our{" "}
                    <span>Terms of Use</span> and <span>Privacy Policy</span>
                </p>
                </center>
                <center>
                    <button onClick={Register} type='submit' className='sign-up_button'>SIGN UP</button>
                </center>
                </form>

            </div>
            
        </div>
    )
}

export default SignUp
