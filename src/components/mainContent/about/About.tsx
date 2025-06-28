import React from 'react';
import { SectionContentP, SectionContentDiv, ContactInfo } from './About.style';
import {
    MainWrapper,
    Section,
    SectionTitle,
} from '../../commonStyledComponents/CommonStyledComponents.style';
import { Testimonials } from '../../testimonials/Testimonials';
import { testimonials } from '../../../commonData/data';

const sectionContents = [
    {
        title: 'Company Overview',
        content: (
            <SectionContentP>
                Haymi Salon is an upscale salon in Lavon. It is a community of
                educated and driven stylists dedicated to the craft, inclusion,
                innovation, and empowerment of each guest that walks through the
                door.
            </SectionContentP>
        ),
    },
    {
        title: 'Company History',
        content: (
            <SectionContentP>
                Founded in 2023, Haymi Beauty Salon began as a small
                neighborhood salon with a passion for personalized hair care and
                creative styling. Over the years, it has grown into a trusted
                brand known for its skilled stylists, modern techniques, and
                commitment to customer satisfaction. With a focus on innovation
                and continued education, Luxe Hair Studio has become a go-to
                destination for clients seeking both classic and contemporary
                looks.
            </SectionContentP>
        ),
    },
    {
        title: 'Services and Expertise',
        content: (
            <SectionContentDiv>
                We offer a range of services, including:
                <ul>
                    <li>Hair cutting</li>
                    <li>Hair coloring</li>
                    <li>
                        Hair styling (blow drying, curling, straightening,
                        updos)
                    </li>
                    <li>Shampooing and conditioning</li>
                    <li>
                        Hair treatments (deep conditioning, keratin, scalp
                        treatments)
                    </li>
                    <li>
                        Chemical services (perms, relaxers, straightening
                        systems)
                    </li>
                </ul>
            </SectionContentDiv>
        ),
    },
];

const About: React.FC = () => {
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

export default About;
