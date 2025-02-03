import * as XLSX from "xlsx"

export interface CarRentalData {
  id: number
  model: string
  category: string
  rentals: number
  averageRentalDuration: number
  totalRevenue: number
  fuelEfficiency: number
}

const excelData: CarRentalData[] = [
  {
    id: 1,
    model: "Toyota Corolla",
    category: "Sedan",
    rentals: 150,
    averageRentalDuration: 3.5,
    totalRevenue: 15750,
    fuelEfficiency: 32,
  },
  {
    id: 2,
    model: "Honda Civic",
    category: "Sedan",
    rentals: 120,
    averageRentalDuration: 4.2,
    totalRevenue: 15120,
    fuelEfficiency: 36,
  },
  {
    id: 3,
    model: "Ford Focus",
    category: "Hatchback",
    rentals: 90,
    averageRentalDuration: 3.8,
    totalRevenue: 10260,
    fuelEfficiency: 30,
  },
  {
    id: 4,
    model: "Volkswagen Golf",
    category: "Hatchback",
    rentals: 80,
    averageRentalDuration: 3.2,
    totalRevenue: 7680,
    fuelEfficiency: 29,
  },
  {
    id: 5,
    model: "Hyundai Elantra",
    category: "Sedan",
    rentals: 100,
    averageRentalDuration: 3.9,
    totalRevenue: 11700,
    fuelEfficiency: 33,
  },
  {
    id: 6,
    model: "Nissan Altima",
    category: "Sedan",
    rentals: 110,
    averageRentalDuration: 4.0,
    totalRevenue: 13200,
    fuelEfficiency: 32,
  },
  {
    id: 7,
    model: "Chevrolet Cruze",
    category: "Sedan",
    rentals: 85,
    averageRentalDuration: 3.7,
    totalRevenue: 9435,
    fuelEfficiency: 31,
  },
  {
    id: 8,
    model: "Mazda CX-5",
    category: "SUV",
    rentals: 130,
    averageRentalDuration: 4.5,
    totalRevenue: 17550,
    fuelEfficiency: 28,
  },
  {
    id: 9,
    model: "Kia Sportage",
    category: "SUV",
    rentals: 95,
    averageRentalDuration: 4.1,
    totalRevenue: 11685,
    fuelEfficiency: 26,
  },
  {
    id: 10,
    model: "Subaru Outback",
    category: "SUV",
    rentals: 105,
    averageRentalDuration: 4.3,
    totalRevenue: 13545,
    fuelEfficiency: 29,
  },
]

const workbook = XLSX.utils.book_new()
const worksheet = XLSX.utils.json_to_sheet(excelData)
XLSX.utils.book_append_sheet(workbook, worksheet, "Car Rental Data")

export function getCarRentalData(): CarRentalData[] {
  return excelData
}

