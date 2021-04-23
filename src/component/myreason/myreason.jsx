import React, {Component, Fragment, useEffect} from 'react';
import Header from '../header';
import './myreason.css';
import Footer from '../footer';
import Aos from 'aos';


const AboutMe = () => {
    useEffect( ()=>{
        Aos.init({duration:2000});
    }, []);
    return(
        <Fragment>
                <div>
                <div className="card backgroundmyReason" data-aos="fade-up">
                    <h1>Why I want to join IEEE and what kind of my dream team?</h1>
                    <p>I want to expand my knowledge about information technology. Also, I want to learn more about web programming and apply it to real projects. Then, I want to get some opportunities to get a network from fellow IEEE officers and experts in IT.</p>
                    <p>The dream team that I hope is like the team that consists of people with high responsibility and not hesitate to tell me if I make a mistake. In the IT division, I will be a front-end developer.</p>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    )
}


export default AboutMe;