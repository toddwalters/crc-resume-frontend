import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

/**
 * Social Icons
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const SocialIcons = () => (
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/toddwalters/">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/toddwalters">
            <FontAwesomeIcon icon={faGithub} />
        </a>
    </div>
);

export default SocialIcons;
