import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

/**
 * Certifications List Item
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const CertificationsListItem = ({ item }) => (
    <Fragment>
        <li>
            <FontAwesomeIcon icon={faTrophy} className="text-warning" />
            {item}
        </li>
    </Fragment>
);

CertificationsListItem.propTypes = {
    item: string.isRequired
};

export default CertificationsListItem;
