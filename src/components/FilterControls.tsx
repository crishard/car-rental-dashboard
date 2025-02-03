"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

interface FilterControlsProps {
  onCategoryChange: (value: string) => void
  onSortChange: (value: string) => void
  onSearchChange: (value: string) => void
  searchTerm: string
  onClearSearch: () => void
}

export function FilterControls({
  onCategoryChange,
  onSortChange,
  onSearchChange,
  searchTerm,
  onClearSearch,
}: FilterControlsProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Select onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Sedan">Sedan</SelectItem>
            <SelectItem value="Hatchback">Hatchback</SelectItem>
            <SelectItem value="SUV">SUV</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Select onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rentals">Total Rentals</SelectItem>
            <SelectItem value="averageRentalDuration">Avg. Rental Duration</SelectItem>
            <SelectItem value="totalRevenue">Total Revenue</SelectItem>
            <SelectItem value="fuelEfficiency">Fuel Efficiency</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <div className="flex">
        <motion.div className="flex-grow mr-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Input
            type="text"
            placeholder="Search by model"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button onClick={onClearSearch}>Clear</Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

