import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { ChartsContainer } from './ChartComponent.style';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
        },
    },
};

const ChartComponent: React.FC<{ data: ChartData }> = ({ data }) => {
    return (
        <div>
            <h2>Skills Overview</h2>
            <ChartsContainer>
                <div className="bar-chart">
                    <Bar
                        data={data}
                        options={{
                            ...chartOptions,
                            plugins: {
                                ...chartOptions.plugins,
                                title: {
                                    ...chartOptions.plugins.title,
                                    text: 'Skills Distribution',
                                },
                            },
                        }}
                    />
                </div>
                <div className="pie-chart">
                    <Pie
                        data={data}
                        options={{
                            ...chartOptions,
                            plugins: {
                                ...chartOptions.plugins,
                                title: {
                                    ...chartOptions.plugins.title,
                                    text: 'Skills Breakdown',
                                },
                            },
                        }}
                    />
                </div>
            </ChartsContainer>
        </div>
    );
};

export default ChartComponent;
