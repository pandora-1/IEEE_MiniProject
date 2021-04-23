import React, {Component} from 'react';
import '../component/footer.css';
import Instagram from '../asset/instagram_1.png';
import Linkedin from '../asset/linkedin.png';


class Footer extends Component {
    render(){
        return(
            <div class="navbar">
                <div className="footer">
                    <a>Social Media:</a>
                    <a href="https://www.linkedin.com/in/marcellus-michael-herman-kahari">
                    <img src={Linkedin} className="linkedin" width="33px"></img>
                    </a>
                    <a href="https://www.instagram.com/michaelherman221/">
                    <img src={Instagram} className="instagram" href="www.linkedin.com/in/marcellus-michael-herman-kahari"width="40px"></img>
                    </a>
                    
                </div>
                <div class="text-center p-3 backgroundcolor">
                    © 2021 Copyright: Marcellus Michael Herman Kahari - Batch 2021
                </div>
            </div>
        )
    }
}

export default Footer;