import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3Alt,
    faHtml5,
    faNpm,
    faNodeJs,
    faReact,
    faSass,
    faPython,
    faAws,
} from '@fortawesome/free-brands-svg-icons';

/**
 * Technologies List
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const TechnologiesList = () => (
    <ul className="list-inline technologies-list">
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faHtml5} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faCss3Alt} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faReact} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faSass} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faAws} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faPython} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faNodeJs} />
        </li>
        <li className="list-inline-item">
            <FontAwesomeIcon icon={faNpm} />
        </li>
    </ul>
);

export default TechnologiesList;
