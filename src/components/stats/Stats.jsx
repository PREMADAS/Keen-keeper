import React from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'
import Footer from '../Footer';

const Stats = () => {
    const interactions = JSON.parse(localStorage.getItem('interactions') || '[]');

    const callCount = interactions.filter(i => i.type === 'Call').length;
    const textCount = interactions.filter(i => i.type === 'Text').length;
    const videoCount = interactions.filter(i => i.type === 'Video').length;

    const data = [
        { name: 'Text', value: textCount },
        { name: 'Call', value: callCount },
        { name: 'Video', value: videoCount },
    ]

    const COLORS = ['#7c3aed', '#244d3f', '#22c55e']

    return (
        <div>
            <div className="max-w-2xl mx-auto px-4 py-6">
                <h2 className="text-2xl font-bold mb-4">Friendship Analytics</h2>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <p className="text-gray-500 mb-4">By Interaction Type</p>
                    <PieChart width={600} height={300}>
                        <Pie
                            data={data}
                            cx={300}
                            cy={130}
                            innerRadius={80}
                            outerRadius={120}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default Stats;