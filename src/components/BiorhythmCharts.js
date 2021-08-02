import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from 'recharts';

import React from 'react'
import { calculateBiorhythmSeries } from '../calculations';
import dayjs from 'dayjs';

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM')
}
export default function BiorhythmCharts({ birthDate, targetDate }) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
        .map((item) => ({ ...item, date: formatDate(item.date) }))

    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="date"
                    ticks={[data[3].date, data[15].date, data[27].date]} />
                <ReferenceLine x={data[15]} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Line dot={false} dataKey='physical' stroke='green'></Line>
                <Line dot={false} dataKey='emotional' stroke='red' ></Line>
                <Line dot={false} dataKey='intellectual' stroke='blue' ></Line>
            </LineChart>
        </ResponsiveContainer>
    )
}
