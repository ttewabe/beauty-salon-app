import React, { useRef, useEffect, useCallback } from 'react';
import {
    MainWrapper,
    Section,
    SectionTitle,
} from '../../commonStyledComponents/CommonStyledComponents.style';
import {
    ImageContainer,
    ImageContainerSmall,
    ServiceList,
} from './Services.style';
import ServicesImage from '../../../assets/services.jpg';
import CodingEducation from '../../../assets/coding-education.jpg';
import SoftwareDevelopment from '../../../assets/software-development.jpg';
import { useLocation } from 'react-router-dom';

const Services: React.FC = () => {
    const location = useLocation();
    const softwareDevelopmentRef = useRef<HTMLElement>(null);
    const educationServicesRef = useRef<HTMLElement>(null);
    const otherServicesRef = useRef<HTMLElement>(null);

    const scrollToSection = useCallback((hash: string) => {
        if (
            hash === '#software-development' &&
            softwareDevelopmentRef.current
        ) {
            softwareDevelopmentRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        } else if (
            hash === '#education-services' &&
            educationServicesRef.current
        ) {
            educationServicesRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '#other-services' && otherServicesRef.current) {
            otherServicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        scrollToSection(window.location.hash);
    }, [scrollToSection, location]);

    useEffect(() => {
        const handleHashChange = () => {
            scrollToSection(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [scrollToSection]);

    return (
        <MainWrapper>
            <Section>
                <SectionTitle>Our Services</SectionTitle>
                <p>
                    We provide a full range of professional hair care services
                    designed to meet the unique needs and preferences of every
                    client.:
                </p>
                <ImageContainer>
                    <img alt="img" src={ServicesImage} />
                </ImageContainer>
            </Section>

            {/* Software Development Section */}
            <Section ref={softwareDevelopmentRef} id="software-development">
                <SectionTitle>Professional Hair Care Services</SectionTitle>
                <div className="horizontal-container uneven left-bigger">
                    <ServiceList className="left">
                        <li>
                            <p>
                                <b>Haircuts & Styling: </b>
                            </p>{' '}
                            Haircut & Style includes consultation, precision
                            cut, blow-dry, and style.
                        </li>
                        <li>
                            <p>
                                <b>Hair Coloring Services: </b>
                            </p>{' '}
                            Root Touch-Up, full color one solid shade applied
                            from root to tip, highlights/lowlights ,
                            balayage/ombre, toner/gloss treatment and color
                            correction.
                        </li>
                        <li>
                            <p>
                                <b>Hair Treatments: </b>
                            </p>{' '}
                            Deep Conditioning Treatment Restores moisture and
                            strength, Scalp Treatment – Targets dryness,
                            buildup, or irritation, Protein Rebuilding –
                            Strengthens damaged or chemically treated hair.
                        </li>
                    </ServiceList>
                    <ImageContainerSmall className="right">
                        <img alt="img" src={SoftwareDevelopment} />
                    </ImageContainerSmall>
                </div>
            </Section>

            <Section ref={educationServicesRef} id="education-services">
                <SectionTitle>Other Services</SectionTitle>
                <div className="horizontal-container uneven right-bigger">
                    <ImageContainerSmall className="left">
                        <img alt="img" src={CodingEducation} />
                    </ImageContainerSmall>
                    <ServiceList className="right">
                        <li>
                            <p>
                                <b>Texture & Chemical Services: </b>
                            </p>{' '}
                            Perms adds curl or wave for lasting texture and
                            volume. Relaxers straightens and softens coarse or
                            curly hair.Japanese straightening advanced
                            straightening for long-term sleek results (by
                            consultation).
                        </li>
                        <li>
                            <p>
                                <b>Add-On Services: </b>
                            </p>{' '}
                            Hair Consultation Discuss your goals and receive
                            expert advice. Bang Trim Quick touch-up between full
                            cuts. Beard Trim/Shaping For men looking for clean
                            facial grooming.
                        </li>
                        <li>
                            <p>
                                <b>Retail Products: </b>
                            </p>{' '}
                            We carry a curated selection of professional salon
                            products to maintain your look at home.Shampoos &
                            conditioners, Styling creams, sprays & serums and
                            Heat protection & treatments.
                        </li>
                    </ServiceList>
                </div>
            </Section>
        </MainWrapper>
    );
};

export default Services;
