import React, {Component, Fragment, useEffect} from 'react';
import './organizational.css';
import logo from '../../../asset/LogoARC.png';
import Aos from 'aos';
import "aos/dist/aos.css";

const Organizational = () => {
    useEffect( ()=>{
        Aos.init({duration:2000});
    }, []);
    return(
        <Fragment>
            <div className="mainCard" data-aos="fade-up">
                <div className="mainTitle">
                    <h1>Organizational Experience</h1>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mainbiodata" data-aos="fade-up">
                    <div className="p-2 order-1">
                        <img src={logo} className="logo" width="400rem"></img>
                    </div>
                    <div className="biodata p-2 order-2 align-self-start">
                        <div className="title_biodata">
                            <h1><a className="backgroundtext">Kru ARC 2021</a></h1>
                        </div>
                        <div className="detailText">
                            <h2>Amateur Radio Club ITB is student organization in Institut Teknologi Bandung. This organization focused in web development, networking research and project development.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Organizational;