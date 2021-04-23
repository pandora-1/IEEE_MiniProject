import React, { Component } from "react";
import '../component/header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <Router>
                <div className="navbar">
                    <h6>Marcellus Michael Herman Kahari</h6>
                    <ul className="header">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/AboutMe">About Me</Link>
                        <Link className="link" to="/MyReason">My Reason</Link>
                    </ul>
                </div>
            </Router>
        )
    }
}

export default Header;