import React from 'react';
import { ResumeItem, ResumeSection, SectionHeading } from '../../common';

/**
 * Education Section
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const EducationSection = () => (
    <ResumeSection name="education">
        <div className="w-100">
            <SectionHeading heading="Education" />
            <ResumeItem //mb-5
                heading="Purdue University"
                subHeading="Master of Science"
                date="August 2009 - May 2012">
                <div>
                    <div>School of Technology</div>
                </div>
                <p></p>
            </ResumeItem>
            <ResumeItem
                heading="Anderson University"
                subHeading="MBA"
                date="August 2009 - May 2012">
                <div>
                    <div>Falls School of Business</div>
                </div>
                <p></p>
            </ResumeItem>
            <ResumeItem
                heading="Purdue University"
                subHeading="Bachelor of Science"
                date="Aug 1989 - May 1994">
                <div>
                    <div>Krannert School of Management</div>
                    <div>Major: Industrial Management </div>
                    <div>Minor: Management Information Systems</div>
                </div>
            </ResumeItem>
        </div>
    </ResumeSection>
);

export default EducationSection;
