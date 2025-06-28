import React from 'react';
import {
    MenuDetailsContainer,
    MenuDetailsItem,
    MenuDetailsTitle,
    MenuDetailsItemContent,
    MenuDetailsItemContentItem,
} from './MenuDetails.style';
import { useNavigate } from 'react-router-dom';

interface MenuDetailsProps {
    setMenuDetailsOpen: (isOpen: boolean) => void;
}

const MenuDetails: React.FC<MenuDetailsProps> = ({ setMenuDetailsOpen }) => {
    const navigate = useNavigate();

    const navigateToSection = (hash: string) => {
        navigate(`/services${hash}`);
    };

    return (
        <MenuDetailsContainer onMouseEnter={() => setMenuDetailsOpen(true)}>
            <MenuDetailsItem
                onClick={() => navigateToSection('#software-development')}
            >
                <MenuDetailsTitle>Software Development</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>
                        Hair cutting
                    </MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>
                        Hair coloring
                    </MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>
                        Hair treatments
                    </MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
            <MenuDetailsItem
                onClick={() => navigateToSection('#education-services')}
            >
                <MenuDetailsTitle>Education Services</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>
                        Chemical Service
                    </MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>
                        Shampooing and conditioning
                    </MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>
                        Hair styling
                    </MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
            <MenuDetailsItem
                onClick={() => navigateToSection('#other-services')}
            >
                <MenuDetailsTitle>Other Services</MenuDetailsTitle>
                <MenuDetailsItemContent>
                    <MenuDetailsItemContentItem>
                        USIS Form
                    </MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>
                        US Citizenship Form
                    </MenuDetailsItemContentItem>
                    <MenuDetailsItemContentItem>
                        Notary Services
                    </MenuDetailsItemContentItem>
                </MenuDetailsItemContent>
            </MenuDetailsItem>
        </MenuDetailsContainer>
    );
};

export default MenuDetails;
