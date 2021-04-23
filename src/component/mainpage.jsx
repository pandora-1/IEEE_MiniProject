import React, {Component, Fragment} from 'react';
import HomePage from '../component/homepage/homepage';
import MyReason from '../component/myreason/myreason';
import AboutMe from '../component/aboutme/aboutme';
import './mainpage.css';
import Instagram from '../asset/instagram_1.png';
import Linkedin from '../asset/linkedin.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <Router>
                <Fragment>
                    <div className="backgroundpict">
                        <div className="navbar">
                            <h6>Marcellus Michael Herman Kahari</h6>
                            <ul className="header">
                                <Link className="link" to="/">Home</Link>
                                <Link className="link" to="/AboutMe">About Me</Link>
                                <Link className="link" to="/MyReason">My Reason</Link>
                            </ul>
                        </div>
                        <Route path="/" exact component={HomePage}></Route>
                        <Route path="/MyReason" component={MyReason}></Route>
                        <Route path="/AboutMe" component={AboutMe}></Route>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default Home;