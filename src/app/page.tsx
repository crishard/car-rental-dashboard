"use client"

import { AverageRentalDurationChart } from "@/components/AverageRentalDurationChart"
import { CarRentalTable } from "@/components/CarRentalTable"
import { CategoryDistributionChart } from "@/components/CategoryDistributionChart"
import { FilterControls } from "@/components/FilterControls"
import { RentalBarChart } from "@/components/RentalBarChart"
import { TotalRevenueChart } from "@/components/TotalRevenueChart"
import { getCarRentalData, type CarRentalData } from "@/data/carRentalData"
import { motion } from "framer-motion"
import { useMemo, useState } from "react"

export default function CarRentalDashboard() {
  const [filterCategory, setFilterCategory] = useState<string>("All")
  const [sortBy, setSortBy] = useState<string>("rentals")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const carRentalData = getCarRentalData()

  const filteredAndSortedData = useMemo(() => {
    return carRentalData
      .filter((car) => filterCategory === "All" || car.category === filterCategory)
      .filter((car) => car.model.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => (b[sortBy as keyof CarRentalData] as number) - (a[sortBy as keyof CarRentalData] as number))
  }, [carRentalData, filterCategory, sortBy, searchTerm])

  return (
    <motion.div
      className="container mx-auto sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Advanced Car Rental Dashboard
      </motion.h1>

      <FilterControls
        onCategoryChange={setFilterCategory}
        onSortChange={setSortBy}
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
        onClearSearch={() => setSearchTerm("")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <RentalBarChart data={filteredAndSortedData} />
        <AverageRentalDurationChart data={filteredAndSortedData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <TotalRevenueChart data={filteredAndSortedData} />
        <CategoryDistributionChart data={filteredAndSortedData} />
      </div>

      <CarRentalTable data={filteredAndSortedData} />
    </motion.div>
  )
}

