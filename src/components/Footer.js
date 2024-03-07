import lopsum from './lopsum.PNG';
import './Footer.css';
import React from 'react';



const Footer = () =>{
    return (
        <>
        <div className="footer">
            <div className="contents">
            <img src={lopsum} alt=""  className="lopsum" />
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</span>
            <div className="anchors">
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
            </div>
            </div>

        </div>
        </>
    );
}

export default Footer;