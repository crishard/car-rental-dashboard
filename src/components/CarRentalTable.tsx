"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { CarRentalData } from "@/data/carRentalData"
import { AnimatePresence, motion } from "framer-motion"

interface CarRentalTableProps {
  data: CarRentalData[]
}

export function CarRentalTable({ data }: CarRentalTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Car Rental Data</CardTitle>
          <CardDescription>Detailed information about car rentals</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Total Rentals</TableHead>
                <TableHead>Avg. Rental Duration (days)</TableHead>
                <TableHead>Total Revenue ($)</TableHead>
                <TableHead>Fuel Efficiency (mpg)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {data.map((car, index) => (
                  <motion.tr
                    key={car.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TableCell>{car.model}</TableCell>
                    <TableCell>{car.category}</TableCell>
                    <TableCell>{car.rentals}</TableCell>
                    <TableCell>{car.averageRentalDuration.toFixed(1)}</TableCell>
                    <TableCell>${car.totalRevenue.toLocaleString()}</TableCell>
                    <TableCell>{car.fuelEfficiency}</TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}

