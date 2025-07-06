import React from 'react';
import { SectionContentP } from './About.style';
import {
    MainWrapper,
    Section,
    SectionTitle,
} from '../../commonStyledComponents/CommonStyledComponents.style';
import { Testimonials } from '../../testimonials/Testimonials';
import { testimonials } from '../../../commonData/data';

const sectionContents = [
    {
        title: 'About Haymi Salon',
        content: (
            <SectionContentP>
                Founded in 2023 and located in Lavon, Haymi Beauty Salon proudly serves clients throughout the Lavon and Wylie areas. What began as a small neighborhood salon with a passion for personalized hair care and creative styling has grown into a trusted destination for quality beauty services.<br /><br />We offer a full range of professional hair services, including braiding, cutting, coloring, styling, shampooing and conditioning, hair treatments, and chemical services. Whether you visit us at the salon or take advantage of our convenient home-to-home service, our mission is to help you look and feel your absolute best.
            </SectionContentP>
        ),
    }
];

export const About: React.FC = () => {
    return (
        <MainWrapper>
            {sectionContents.map((section, index) => (
                <Section key={index}>
                    <SectionTitle>{section.title}</SectionTitle>
                    {section.content}
                </Section>
            ))}
            <Testimonials
                testimonials={testimonials.map((testimonial) => ({
                    title: testimonial.company,
                    description: [testimonial.quote, testimonial.author],
                    image: testimonial.image,
                }))}
            />
        </MainWrapper>
    );
};
