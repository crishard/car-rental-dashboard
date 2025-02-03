"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { CarRentalData } from "@/data/carRentalData"
import { AnimatePresence, motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface TotalRevenueChartProps {
  data: CarRentalData[]
}

export function TotalRevenueChart({ data }: TotalRevenueChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue by Car Model</CardTitle>
          <CardDescription>Total revenue generated per car model</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalRevenue" fill="hsl(var(--secondary))">
                <AnimatePresence>
                  {data.map((entry, index) => (
                    <motion.rect
                      key={`bar-${entry.id}`}
                      initial={{ y: 300, height: 0 }}
                      animate={{ y: 0, height: 300 }}
                      exit={{ y: 300, height: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    />
                  ))}
                </AnimatePresence>
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}

