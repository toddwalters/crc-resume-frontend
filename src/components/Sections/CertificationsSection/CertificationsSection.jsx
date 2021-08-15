import React from 'react';
import { ResumeSection, SectionHeading } from '../../common';

/**
 * Certifications Section
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const CertificationsSection = () => (
    <ResumeSection name="Certifications">
        <div className="w-100">
            <SectionHeading heading="Certifications" />
                <img
                    href="https://www.youracclaim.com/badges/bbba96a7-702f-4559-81fe-e3421ec2717a"
                    src={require('../../../img/awsbadge_SolArchitect-Associate.png')}
                    alt=""
                />                
                <img
                    href="https://www.youracclaim.com/badges/6595e363-e72b-46ec-a516-28ba961e1535"
                    src={require('../../../img/awsbadge_security-specialty.png')}
                    alt=""
                />
                <img
                    href="https://www.youracclaim.com/badges/8f2e8410-5cc5-489a-866b-a536d82b51f9"
                    src={require('../../../img/azure-fundamentals.png')}
                    alt=""
                />
                <p></p>
                <p></p>
                <img
                    href="http://bcert.me/srwrudlef"
                    src={require('../../../img/seal-cspo.png')}
                    alt=""
                />                
        </div>
    </ResumeSection>
);

export default CertificationsSection;
