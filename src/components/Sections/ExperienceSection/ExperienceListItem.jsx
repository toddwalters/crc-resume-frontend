import React, { Fragment } from 'react';
import { string } from 'prop-types';

/**
 * Experience List Item
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const ExperienceListItem = ({ item }) => (
    <Fragment>
        <li>
            {item}
        </li>
    </Fragment>
);

ExperienceListItem.propTypes = {
    item: string.isRequired
};

export default ExperienceListItem;
