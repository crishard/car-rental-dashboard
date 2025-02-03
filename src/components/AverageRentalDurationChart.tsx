"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { CarRentalData } from "@/data/carRentalData"
import { motion } from "framer-motion"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface AverageRentalDurationChartProps {
    data: CarRentalData[]
}

export function AverageRentalDurationChart({ data }: AverageRentalDurationChartProps) {

    const formattedData = data.map((item) => ({
        ...item,
        averageRentalDuration: Number(item.averageRentalDuration),
    }))

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>Average Rental Duration</CardTitle>
                    <CardDescription>Average rental duration per car model</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={formattedData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="model" height={100} angle={-45} tick={{ textAnchor: "end" }} />
                            <YAxis domain={[0, "auto"]} allowDecimals={true} />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="averageRentalDuration"
                                name="Average Rental Duration"
                                stroke="#636363"
                                strokeWidth={3}
                                strokeLinecap="round"
                                connectNulls={false}
                                isAnimationActive={true}
                                animationEasing="linear"
                                animationDuration={500}
                                dot={{
                                    r: 4,
                                    fill: "hsl(var(--primary))",
                                    stroke: "hsl(var(--background))",
                                    strokeWidth: 2,
                                    fillOpacity: 1,
                                }}
                                activeDot={{
                                    r: 8,
                                    fill: "hsl(var(--primary))",
                                    stroke: "hsl(var(--background))",
                                    strokeWidth: 2,
                                }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </motion.div>
    )
}

