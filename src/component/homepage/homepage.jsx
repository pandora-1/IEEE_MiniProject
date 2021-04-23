import React, {Component} from 'react';
import Header from '../header';
import Jumbotron from './Jumbotron';
import './homepage.css';
import Footer from '../footer';
import ComponentFirstPage from './content_1';
import Aos from 'aos';

class HomePage extends Component {
    render() {
        return(
            <div>
                <div className="card background1">
                    {/* <Header/> */}
                    <Jumbotron/>
                    <ComponentFirstPage/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default HomePage;