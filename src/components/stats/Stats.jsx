import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'
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
                <h2 className="text-xl md:text-2xl font-bold mb-4">Friendship Analytics</h2>

                <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                    <p className="text-gray-500 mb-4">By Interaction Type</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="45%"
                                innerRadius={70}
                                outerRadius={100}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Stats;