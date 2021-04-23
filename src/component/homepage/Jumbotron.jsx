import React, { Component, useEffect } from "react";
import '../homepage/Jumbotron.css';
import Aos from 'aos';
import "aos/dist/aos.css";

/* class Jumbotron extends Component {
    render(){
        return(
            <div className="jumbotron jumbotron-fluid mainbackground">
                <div className="container">
                    <h1>Hi!, My name is <a className="backgroundtext">Michael</a></h1>
                    <h1>I'm a <a className="backgroundtext">Front-End </a></h1>
                    <h1><a className="backgroundtext">Developer </a></h1>
                </div>
            </div>
        )
    }
} */

const Jumbotron = () => {
    useEffect( ()=>{
        Aos.init({duration:2000});
    }, []);
    return(
        <div className="jumbotron jumbotron-fluid mainbackground"  data-aos="fade-up">
            <div className="container">
                <h1>Hi!, My name is <a className="backgroundtext">Michael</a></h1>
                <h1>I'm a <a className="backgroundtext">Front-End </a></h1>
                <h1><a className="backgroundtext">Developer </a></h1>
            </div>
        </div>
    )
}

export default Jumbotron;