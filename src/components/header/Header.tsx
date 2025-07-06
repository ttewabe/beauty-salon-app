import React, { useState } from 'react';
import {
    HeaderContainer,
    Logo,
    HamburgerContainer,
    HamburgerButton,
    HeaderDetails,
    HeaderNavitems,
    HeaderMainLine,
    BookNowButton,
} from './Header.style';
import SlideDrawer from '../slideDrawer/SlideDrawer';
import MenuDetails from '../menuDetails/MenuDetails';
import { FaAngleDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMenuDetailsOpen, setMenuDetailsOpen] = useState<boolean>(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setMenuOpen(false);
        }
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <HeaderContainer onMouseLeave={() => setMenuDetailsOpen(false)}>
            <Logo>Haymi Salon</Logo>
            <HeaderMainLine>
                <HeaderDetails>
                    <HeaderNavitems>
                        <span
                            className={isActive('/home') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(false)}
                        >
                            <Link to="/home">Home</Link>
                        </span>
                        <span
                            className={isActive('/services') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(true)}
                        >
                            <Link to="/services">Services</Link>
                            <FaAngleDown />
                        </span>
                        <span
                            className={isActive('/about') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(false)}
                        >
                            <Link to="/about">About</Link>
                        </span>
                        <span
                            className={isActive('/contact') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(false)}
                        >
                            <Link to="/contact">Contact Us</Link>
                        </span>
                    </HeaderNavitems>
                </HeaderDetails>
            </HeaderMainLine>
            <HamburgerContainer onBlur={handleBlur} tabIndex={-1}>
                <BookNowButton>
                    <Link to={'/about'} style={{ textDecoration: 'none' }}>
                        Book Now
                    </Link>
                </BookNowButton>
                <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
                {isMenuOpen && <SlideDrawer setMenuOpen={setMenuOpen} />}
            </HamburgerContainer>
            {isMenuDetailsOpen && (
                <MenuDetails setMenuDetailsOpen={setMenuDetailsOpen} />
            )}
        </HeaderContainer>
    );
};
