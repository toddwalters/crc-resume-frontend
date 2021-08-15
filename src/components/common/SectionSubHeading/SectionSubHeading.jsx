import React from 'react';
import { string } from 'prop-types';

/**
 * Section Sub Heading
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const SectionSubHeading = ({ subHeading }) => <div className="subHeading mb-3">{subHeading}</div>;

SectionSubHeading.propTypes = {
    subHeading: string.isRequired
};

export { SectionSubHeading };
