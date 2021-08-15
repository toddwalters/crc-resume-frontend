import React from 'react';
import { ResumeSection, SectionHeading } from '../../common';

/**
 * Interests Section
 *
 * @author Todd Walters <waltodders@gmail.com>
 */
const InterestsSection = () => (
    <ResumeSection name="interests">
        <div className="w-100">
            <SectionHeading heading="Interests" />
            <p>
                Apart from being a web developer, I enjoy most of my time being outdoors. In the
                winter, I am an avid skier and novice ice climber. During the warmer months here in
                Colorado, I enjoy mountain biking, free climbing, and kayaking.
            </p>
            <p className="mb-0">
                When forced indoors, I follow a number of sci-fi and fantasy genre movies and
                television shows, I am an aspiring chef, and I spend a large amount of my free time
                exploring the latest technology advancements in the front-end web development world.
            </p>
        </div>
    </ResumeSection>
);

export default InterestsSection;
