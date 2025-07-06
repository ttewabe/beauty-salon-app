import React from 'react';
import { Link } from 'react-router-dom';

import {
    WallPaper,
    CompanyMoto,
    CustomButton,
    WallPaperButtons,
    ServicesGrid,
} from './HomeContent.style';
import {
    MainWrapper,
    Section,
    SectionTitle,
    Card,
    CardIcon,
    CardLink,
} from '../../commonStyledComponents/CommonStyledComponents.style';

import WallPaperImage from '../../../assets/wallpaper.jpg';
import HairTreatmentIcon from '../../../assets/hair-treatment.jpg';
import HairDressingIcon from '../../../assets/hair-dressing.jpg';
import HairStyleIcon from '../../../assets/hair-style.jpg';
import { FaAngleRight } from 'react-icons/fa';
import { Carousel } from '../../carousel/Carousel';
import { Testimonials } from '../../testimonials/Testimonials';
import { testimonials } from '../../../commonData/data';

const services = [
    {
        icon: HairStyleIcon,
        title: 'Hair Braids and Styles',
        description: ['Women’s braids and styles'],
    },
    {
        icon: HairDressingIcon,
        title: 'Hair Dressing and Color',
        description: ['Ethiopian hair dressing styles'],
    },
    {
        icon: HairTreatmentIcon,
        title: 'Hair make up Services',
        description: ['Hair make up classes for all ages'],
    },
];

const featuredProjects = [
    {
        title: 'Hair Extensions for Every Style and Texture',
        description: [
            'we believe that every client deserves hair that reflects their individuality. That’s why we offer extensions in straight, wavy, and curly textures, ensuring that no matter your natural hair type, we’ve got you covered.',
        ],
    },
    {
        title: ' Embrace the Season with Style',
        description: [
            ' Its time to refresh your look with the season’s hottest hair trends. From rich, warm tones to textured styles, this fall is all about embracing natural beauty and experimenting with bold changes.',
        ],
    },
    {
        title: 'Your True Colors',
        description: [
            'From natural colors to pastel hues our technicians can mix up almost anything! Then, follow it up with a fresh cut and style. You will leave here with vibrant hair and a plan to keep it vibrant between visits.',
        ],
    },
    {
        title: 'Smooth Hair',
        description: [
            'If you love the sleek, frizz-free results of a Brazilian Blowout but have been hesitant due to concerns about harsh chemicals, we have exciting news! At Republic Hair Co., we’re now offering a formaldehyde-free Brazilian Blowout, delivering the same long-lasting smoothness, shine, and humidity resistance—without the risks of traditional formulas.',
        ],
    },
];

const skills = [
    {
        title: 'Technical Skills',
        description: [
            'Hair cutting, Hair coloring. Hair styling (blow drying, curling, straightening, updos, Shampooing and conditioning, Hair treatments (deep conditioning, keratin, scalp treatment. ',
        ],
    },
    {
        title: 'Interpersonal & Communication Skills',
        description: [
            'Listening actively to understand client requests, Explaining styles, treatments, and maintenance, Customer service (friendly, polite, welcoming attitude), Consultation skills (offering style advice based on face shape, hair type, etc) and Patience (especially with indecisive or difficult clients)',
        ],
    },
    {
        title: 'Creative & Personal Skills',
        description: [
            'Creativity and sense of aesthetics (style matching, trends), Attention to detail (precise cuts and color work), Confidence in decision-making and execution, Adaptability',
        ],
    },
];

const HomeContent: React.FC = () => {
    return (
        <MainWrapper>
            <WallPaper $backgroundimage={WallPaperImage}>
                <CompanyMoto>
                    <h1>Elevate your beauty, indulge in our expertise</h1>
                    <p>
                        Transforming tresses with flair and care, one snip at a
                        time! Your crowning glory awaits, step into style today!
                    </p>
                    <WallPaperButtons>
                        <Link to={'/contact'}>
                            <CustomButton>Contact Us</CustomButton>
                        </Link>
                    </WallPaperButtons>
                </CompanyMoto>
            </WallPaper>
            <Section key={'about-us'}>
                <SectionTitle>About Haymi Beauty Salon</SectionTitle>
                <p>
                    Haircuts are like magic. They make the old you disappear and
                    the new you appear.
                </p>
                <Link to={'/about'}>
                    <CustomButton>Register Here</CustomButton>
                </Link>
                <ServicesGrid>
                    {services.map((service, index) => (
                        <Card key={index}>
                            <img src={service.icon} alt={service.title} />
                            <div className="card-content">
                                <h4>{service.title}</h4>
                                {service.description.map((desc) => (
                                    <p key={desc}>{desc}</p>
                                ))}
                            </div>
                        </Card>
                    ))}
                </ServicesGrid>
            </Section>
            <Section key={'featured-projects'}>
                <SectionTitle>Featured Styles</SectionTitle>
                <p>Explore some of our recent work and success stories</p>
                <ServicesGrid className="featured-projects">
                    {featuredProjects.map((project, index) => (
                        <Card key={index} className="hover-card">
                            <CardIcon>
                                {/* Replace with actual icons if available */}
                                <img alt="" src={HairStyleIcon} />
                            </CardIcon>
                            <div className="card-content">
                                <h4>{project.title}</h4>
                                {project.description.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                                <CardLink>
                                    View Hair Works <FaAngleRight />
                                </CardLink>
                            </div>
                        </Card>
                    ))}
                </ServicesGrid>
            </Section>
            <Section key="skill-knowledge">
                <SectionTitle>Our Skills and Knowledge</SectionTitle>
                <p>
                    Our team combines extensive expertise in beauty salon, Hair
                    dressing, and make up to deliver quality that make a real
                    difference.
                </p>
                <ServicesGrid>
                    {skills.map((skill, index) => (
                        <Card key={index}>
                            <h4>{skill.title}</h4>
                            {skill.description.map((desc) => (
                                <p key={desc}>{desc}</p>
                            ))}
                        </Card>
                    ))}
                </ServicesGrid>
            </Section>
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

export default HomeContent;
