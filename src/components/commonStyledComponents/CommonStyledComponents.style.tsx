import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    padding: 4rem 0;
    min-height: 80dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
`;

export const Section = styled.section`
    width: 70%;
    text-align: center;
    position: relative;
    margin-bottom: 1rem;

    .featured-projects {
        grid-template-columns: repeat(2, 1fr);
    }

    .vertical-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .horizontal-container.uneven.left-bigger {
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .left {
            flex: 2;
        }
        .right {
            flex: 1;
        }
    }

    .horizontal-container.uneven.right-bigger {
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .left {
            flex: 1;
        }
        .right {
            flex: 2;
        }
    }

    @media (max-width: 1024px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const SectionTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 0;
    color: #003366;

    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

// Card content 
export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1 / 1; /* Square card, adjust as needed */
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(245, 131, 190);
    cursor: pointer;
    transition: transform 0.3s ease;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: translateY(-5px);
    }

    /* Full-size background image (icon) */
    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
        z-index: 0;
    }

    /* Overlay content */
    .card-content {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.65);
        color: #fff;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        text-align: center;

        h4 {
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 14px;
        }
    }

    &:hover .card-content {
        opacity: 1;
    }
`;

export const CardIcon = styled.div`
    width: 60px;
    height: 60px;
    text-align: center;
    padding: 10px;
    color: #444444;
    margin-bottom: 0.5rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const CardLink = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background-color: #eeeeee;

    &:hover {
        scale: 1.05;
        transition: all 0.3s ease;
        background-color: #dddddd;
    }
`;
