import React from 'react';
import { ResumeSection, SectionHeading, SectionSubHeading } from '../../common';
import SkillsListItem from './SkillsListItem';
import TechnologiesList from '../../TechnologiesList';

/**
 * Skills Section
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const SkillsSection = () => (
    <ResumeSection name="skills">
        <div className="w-100">
            <SectionHeading heading="Skills" />
            <SectionSubHeading subHeading="Programming Languages &amp; Tools" />
            <TechnologiesList />
            <SectionSubHeading subHeading="Passionate About" />
            <ul className="fa-ul mb-0">
                <SkillsListItem item="Amazon Web Services" />
                <SkillsListItem item="Infrastructure as Code" />
                <SkillsListItem item="Serverless Services" />
                <SkillsListItem item="Container Services" />
                <SkillsListItem item="Agile Development & Scrum" />
            </ul>
            <p></p>
            <SectionSubHeading subHeading="Proficient In" />
            <ul className="fa-ul mb-0">
                <SkillsListItem item="OpenShift Container Platform" />
                <SkillsListItem item="VMware vSphere" />
                <SkillsListItem item="Linux (RHEL & Ubuntu)" />
                <SkillsListItem item="HTML/CSS" />
            </ul>
            <p></p>
            <SectionSubHeading subHeading="Knowledgable About" />
            <ul className="fa-ul mb-0">
                <SkillsListItem item="Programming/Scripting: Bash, Python & JavaScript " />
                <SkillsListItem item="Infrastructure as Code: CloudFormation & Terraform " />
                <SkillsListItem item="CI/CD Tools: GitHub, GitHub Actions, AWSCodeBuild, & AWS CodePipeline" />
                <SkillsListItem item="Serverless Solutions: AWS Lamba, AWS Serverless Application Model & Amazon DynamoDB," />
                <SkillsListItem item="Container Services: Docker, Red Hat OpenShift" />
                <SkillsListItem item="Cloud Network Services: VPC configuration, Subnetting, Routing, Load Balancing, DNS, Proxy Services & Firewalls" />
            </ul>
            <p></p>
        </div>
    </ResumeSection>
);

export default SkillsSection;
