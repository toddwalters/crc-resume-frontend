import React from 'react';
import { ResumeSection } from '../../common';
import SocialIcons from '../../SocialIcons';

/**
 * About Section
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const AboutSection = () => (
    <ResumeSection name="about">
        <div className="w-100">
            <h1 className="mb-0">
                Todd
                <span className="text-primary">Walters</span>
            </h1>
            <div className="subHeading mb-5">
                Indianapolis, IN
                {/* <a href="mailto:email@example.com"> email@example.com</a> */}
            </div>
            <p className="lead mb-5">
                Enterprise IT Infrastructure professional with over twenty years experience working in the life sciences industry, developing, deploying and managing IT solutions across the Enterprise IT Landscape.  I am a Senior Cloud Engineer focused on the creation of infrastructure and developer-enabling cloud solutions and services in AWS and Google Cloud.  I have broad and versitile experience across Amazon Web Services, Google Cloud Platform, Red Hat OpenShift Container Platform, VMware vSphere, and Red Hat Enterprise Linux, with a focus on the creation of on-premises private, as well as public and hypbrid cloud, IaaS and PaaS services and solutions in highly regulated and quality controlled environments.
            </p>
            <SocialIcons />
        </div>
    </ResumeSection>
);

export default AboutSection;
