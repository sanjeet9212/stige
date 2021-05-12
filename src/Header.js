import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link className="logo-link" to="/">
                <h1 className="logo">Stige</h1>
            </Link>
        </div>
    )
}

export default Header
