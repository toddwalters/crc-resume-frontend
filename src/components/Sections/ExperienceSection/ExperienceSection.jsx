import React from 'react';
import { ResumeItem, ResumeSection, SectionHeading } from '../../common';
import ExperienceListItem from './ExperienceListItem';

/**
 * Experience Section
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const ExperienceSection = () => (
    <ResumeSection name="experience">
        <div className="w-100">
            <SectionHeading heading="Experience" />
            <ResumeItem // mb-5
                heading="Senior Cloud Engineer"
                subHeading="Eli Lilly & Company"
                date="March 2018 - Present">
                <p>Responsibilities and experiences include:</p>
                <ul className="resume-ul">
                    <ExperienceListItem item="Designing cloud architecture focused solutions for internal Eli Lilly IT teams looking to migrate or develop new PaaS, IaaS, or hybrid solutions utilizing Amazon Web Services (AWS)" />
                    <ExperienceListItem item="Led large scale and complex cloud service development projects including the development of an AWS Landing Zone solution that  automated AWS account creation, deployment and configuration based on corporate and industry standard cloud security, quality, and compliance standards and guardrails" />
                    <ExperienceListItem item="Hands on experience in deploying and configuring Enterprise class cloud solutions with AWS services: CloudFormation, IAM Roles an  and Policies, EC2, SNS, S3, Multi-Region VPC, Route53, Security Groups, ALB/ELB/NLB, WAF, Shield, GuardDuty, KMS, CloudTrail, Config, and CloudWatch" />
                    <ExperienceListItem item="Written CloudFormation templates to deploy and configure the AWS service based solutions" />
                    <ExperienceListItem item="Creation of IAM Roles, Policies, and Boundaries to enable least privilege access within accounts as well as the ability to allow service admin autonomy while protecting AWS Account foundational resources and guardrails" />
                    <ExperienceListItem item="Consult and advise on the implementation of Eli Lilly and Company's cloud practices across the global IT landscape" />
                    <ExperienceListItem item="Promote, mentor and educate the Eli Lilly IT community on cloud adoption, operating guidelines, principles, and cloud services and solutions" />
                    <ExperienceListItem item="Helped to define, document and qualify the initial set of foundational services deployed within the AWS accounts as part our public cloud service offering." />
                    <ExperienceListItem item="Serve as an AWS cloud services evangelist to the data services organizations as they look to stand-up and offer various AWS database services. Providing education, guidance and consultation to teams related to current and future state of our AWS service offering." />
                    <ExperienceListItem item="Partner effectively with Information Security, Enterprise Data Services, Network and Service Management teams to ensure delivery of reliable and secure cloud services." />
                </ul>
            </ResumeItem>
            <ResumeItem
                heading="Senior Paas/Cass Engineer"
                subHeading="Eli Lilly & Company"
                date="March 2016 - March 2018">
                <p>
                Senior PaaS/CaaS Engineer and Service Owner responsible for the technical design, development and implementation of on-premise Platform-as-a-Service and Container-as-a-Service solutions. I was responsible for researching, reviewing, evaluating, and testing on-premise Linux and Windows PaaS/CaaS solutions to identify their fit within our portfolio of on-premise application development solutions.

                I lead a global cross-functional team of gifted engineering, development, and operations team members focused on the development and support of an on-premise OpenShift Container Platform Service. The team consults, guides and educates business unit IT teams on new cloud native application development as well as re-platforming applications from legacy platforms to a modern application container based platform running on OpenShift.
                </p>
                <p>
                Primary Job Responsibilities:
                </p>
                <ul className="resume-ul">
                    <ExperienceListItem item="Implement an enterprise PaaS/CaaS solution based on OpenShift Container Platform by Red Hat that integrates with our custom developed IaaS portal" />
                    <ExperienceListItem item="Create next-generation application platform automation solutions based around containers and container orchestration technologies like Kubernetes, Docker, Red Hat Enterprise Linux, and Ubuntu" />
                    <ExperienceListItem item="Design, develop and implement an internal charge/show-back model for on-premise consumption of PaaS/CaaS service offerings" />
                    <ExperienceListItem item="Provide mentoring and guidance to internal app dev teams leveraging the OpenShift platform for next-generation application development" />
                    <ExperienceListItem item="Promote on-premise CaaS/PaaS solutions to internal business unit IT groups focused application development" />
                </ul>
            </ResumeItem>
            <ResumeItem
                heading="Senior Virtualization Engineer"
                subHeading="Eli Lilly & Company"
                date="Mar 2013 - Mar 2016">
                <p>
                <p>I owned, created and deployed a new internal VMware VSAN service offering within the virtualization services team. I authored the requirements, configuration and design documentation for the service, as well as, the service operational support documentation. I drove and championed the use of the VSAN based solutions within all new small site deployments requiring virtualization services infrastructure. The VMware VSAN solution I designed has become the de facto deployment configuration used globally for small site deployments that require virtualization services.</p>

                <p>I was the primary point of contact for Lilly on the SolarWinds element manager implementation for data center network services and virtualization services device monitoring. I also served as the VMware services subject matter expert for the project. I reviewed and approved all documentation generated as part of the deployment including the design, requirements, and installation documents.</p>
                <p>Researched and defined the DL580Gen9 Server Configuration Standard used by both Core Domain Services and Virtualization Services teams to deploy this server class within the environment.</p>
                <p>I conducted a VMware Virtual Distributed Switch Proof of Concept evaluation to determine the feasibility and challenges associated with migrating from VMware Standard Switches to Distributed Switches within our global ESXi environment.</p>
                <p>Responsible for POC testing of VMware vCenter Operations Manager for View software to investigate possibility of the tool to function as centralized resource for View infrastructure capacity, performance and event monitoring and management.</p>
                <p>Service delivery manager for Lilly’s custom developed IaaS offering and served as the liaison between IaaS portal developers and internal Global IT with regards to ongoing development, improvement of IaaS service capabilities and I oversaw the global rollout of the IaaS offering.</p>
                </p>
            </ResumeItem>
            <ResumeItem
                heading="Hosting and Cloud Services Business/Financial Analyst"
                subHeading="Eli Lilly & Company"
                date="Mar 2010 - Mar 2013">
                <p>
                Global Platform Hosting Services business and financial analyst. Created and maintained a global internal unit cost and pricing model associated with server deployments, as well as storage and network resource allocation across internal business units consuming IT resource owned and managed by the Platform Hosting Organization. Developed and managed the volume and project driven growth chargeback model used by the Global Platform Hosting Services Organization. Tracked projected and actual OPEX and CAPEX related to virtual desktop and servers, network and storage resources. Owned and developed business cases based on NPV, ROI and TCO analysis of major project proposals with the Global Platform Hosting Services Organization. Owned capital asset review and retirement for the department.
                </p>
                <p>
                Global Service Delivery Manager for Enterprise Systems Management (ESM) and SOA Gateway Services teams. Developed and implemented a ESM Project work tracking and status update process. Partnered with ESM Services supplier on Service Strategy Review and Development efforts. I was the primary internal departmental customer relationship and issue escalation contact for bot the ESM and SOA Gateway services team. Provided quality, process and procedure creation guidance to SOA Gateway Services support team as they worked toward establishing the SOA Gateway offering as a new IT service within the company.
                </p>
            </ResumeItem>
            <ResumeItem
                heading="UNIX/Linux Systems Administrator"
                subHeading="Eli Lilly & Company"
                date="Mar 1999 - Mar 2010">
                <p
                >Lead the design and creation of a Red Hat Linux high availability clustering service offering. Compared Veritas HA and Red Hat HA solutions. Created and maintained automated installation and configuration script of Veritas Cluster software onto Red Hat Linux systems. Created NetIQ based monitoring solution for HA Cluster events leveraging trigger scripts to generate NetIQ based incidents and trouble-tickets for HA Cluster failures.
                </p>
                <p>
                Solaris UNIX performance management subject matter expert for the team. Veritas Volume Management subject matter expert. Created script to automate Veritas Volume Manager upgrades on Sun Solaris UNIX systems.
                </p>
            </ResumeItem>
        </div>
    </ResumeSection>
);

export default ExperienceSection;
