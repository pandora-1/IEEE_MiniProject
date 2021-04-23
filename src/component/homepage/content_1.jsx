import React, {Component, useEffect}  from 'react';
import './content_1.css';
import fotodiri from './assets_firstpage/fotodiri.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

/* class ComponentFirstPage extends Component {
    render(){
        useEffect( ()=>{
            Aos.init({duration:2000});
        }, []);
        return(
            <div className="d-flex flex-row justify-content-center align-items-center mainbiodata" data-aos="fade-up">
                <div className="p-2 order-1">
                    <img src={fotodiri} width="400rem"></img>
                </div>
                <div className="biodata p-2 order-2 align-self-start">
                    <div className="title_biodata">
                        <h1><a className="backgroundtext">Biodata</a></h1>
                    </div>
                    <div>
                        <h2>Name = Marcellus Michael Herman Kahari</h2>
                        <h2>Age = 19</h2>
                        <h2>Faculty = School of Electro Engineering and Informatics</h2>
                        <h2>Major = TPB</h2>
                        <h2>Batch = 2020</h2>
                    </div>
                </div>
            </div>
        )
    }
}
 */

const ComponentFirstPage = () => {
    useEffect( ()=>{
        Aos.init({duration:2000});
    }, []);
    return(
        <div className="d-flex flex-row justify-content-center align-items-center mainbiodata" data-aos="fade-up">
            <div className="p-2 order-1">
                <img src={fotodiri} className="fotodiri" width="400rem"></img>
            </div>
            <div className="biodata p-2 order-2 align-self-start">
                <div className="title_biodata">
                    <h1><a className="backgroundtext">Biodata</a></h1>
                </div>
                <div>
                    <h2>Name = Marcellus Michael Herman Kahari</h2>
                    <h2>Age = 19</h2>
                    <h2>Faculty = School of Electro Engineering and Informatics</h2>
                    <h2>Major = TPB</h2>
                    <h2>Batch = 2020</h2>
                </div>
            </div>
        </div>
    );

};
export default ComponentFirstPage;