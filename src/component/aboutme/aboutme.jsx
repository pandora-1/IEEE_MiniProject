import React, {Component} from 'react';
import Header from '../header';
import './aboutme.css';
import Footer from '../footer';
import Aos from 'aos';
import Swot from './component/swot';
import Organizational from './component/organizational';

class AboutMe extends Component {
    render() {
        return(
            <div>
                <div className=" card background">
                    <div className="align-items-center place">
                    <Swot></Swot>
                    <Organizational></Organizational>
                    </div>
                    {/* <Footer></Footer> */}
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default AboutMe;