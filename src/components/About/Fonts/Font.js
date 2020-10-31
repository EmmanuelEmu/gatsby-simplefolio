import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact ,faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3, faHtml5, faJava, faNodeJs, faReacteurope } from '@fortawesome/free-brands-svg-icons';
const Font = () => {
    return (
        <div>
            <section className ="d-flex justify-content-around">
            <FontAwesomeIcon icon = {faReacteurope} size="6x"/>
            <FontAwesomeIcon icon = {faHtml5} size="6x"/>
            <FontAwesomeIcon icon = {faCss3} size="6x"/>
            </section>
            <section className ="d-flex justify-content-around">
            <FontAwesomeIcon icon = {faBootstrap} size="6x"/>
            <FontAwesomeIcon icon = {faJava} size="6x"/>
            <FontAwesomeIcon icon = {faNodeJs} size="6x"/>
            </section>
        </div>
        
    );
};

export default Font;