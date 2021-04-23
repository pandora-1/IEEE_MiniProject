import React, {Component, Fragment, useEffect} from 'react';
import './swot.css';
import Strength from '../../../asset/strength.png';
import Weakness from '../../../asset/link-broken.png';
import Opportunity from '../../../asset/opportunities.png';
import Threats from '../../../asset/danger.png'
import Aos from 'aos';

const Swot = () => {
    useEffect( ()=>{
        Aos.init({duration:2000});
    }, []);
    return(
        <Fragment>
            <div data-aos="fade-up">
            <h1 className="title-aboutme" >SWOT Analysis</h1>
            <div className="d-inline-flex p-3 justify-content-center background2">
                <div className="card swot strength">
                    <img className="card-img-top" src={Strength} alt="Card image"></img>
                    <div className="card-body">
                        <h4 className="card-title">Strengths</h4>
                        <p className="card-text">I love to learn new skills and knowledge. I have a high responsibility.</p>
                    </div>
                </div>
                <div className="card swot weakness">
                    <img className="card-img-top" src={Weakness} alt="Card image"></img>
                    <div className="card-body">
                        <h4 className="card-title">Weaknesses</h4>
                        <p className="card-text">My knowledge is limited. Also, I feel difficult to create a clean code. But, I never stop to learning and trying to be an expert.</p>
                    </div>
                </div>
                <div className="card swot opportunity">
                    <img className="card-img-top" src={Opportunity} alt="Card image"></img>
                    <div className="card-body">
                        <h4 className="card-title">Opportunities</h4>
                        <p className="card-text">I don't have any busy activities right now that will distract my focus in IEEE.</p>
                    </div>
                </div>
                <div className="card swot threats">
                    <img className="card-img-top" src={Threats} alt="Card image"></img>
                    <div className="card-body">
                        <h4 className="card-title">Threats</h4>
                        <p className="card-text">Maybe, in third semester I will more busy than right now, but I believe that I can manage time so that will not disturb the task in IEEE.</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
            </div>
        </Fragment>
    )
}

export default Swot;