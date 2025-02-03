"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { CarRentalData } from "@/data/carRentalData"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface RentalBarChartProps {
  data: CarRentalData[]
}

export function RentalBarChart({ data }: RentalBarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Rentals by Car Model</CardTitle>
          <CardDescription>Number of rentals per car model</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="rentals"
                fill="hsl(var(--primary))"
                onMouseEnter={(_, index) => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <AnimatePresence>
                  {data.map((entry, index) => (
                    <motion.rect
                      key={`bar-${entry.id}`}
                      initial={{ y: 300, height: 0 }}
                      animate={{
                        y: 0,
                        height: 300,
                        scale: hoveredBar === index ? 1.1 : 1,
                      }}
                      exit={{ y: 300, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
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

