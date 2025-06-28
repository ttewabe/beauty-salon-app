import styled from 'styled-components';

export const ChartsContainer = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    padding: 1rem;

    flex-direction: row;

    .bar-chart,
    .pie-chart {
        width: 45%;
        height: 400px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        .bar-chart,
        .pie-chart {
            width: 100%;
            height: 300px;
        }
    }
`;
