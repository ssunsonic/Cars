import { Droplets, Disc3, Wrench, Zap, Thermometer, Shield } from "lucide-react"

export const serviceTypes = [
  {
    id: "oil-change",
    name: "Oil Change",
    icon: Droplets,
    description: "Conventional, synthetic blend, or full synthetic",
    avgPrice: { low: 35, high: 125 },
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "tire-service",
    name: "Tire Services",
    icon: Disc3,
    description: "Rotation, balance, repair, or replacement",
    avgPrice: { low: 20, high: 200 },
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "brake-service",
    name: "Brake Service",
    icon: Wrench,
    description: "Inspection, pad replacement, or full service",
    avgPrice: { low: 100, high: 400 },
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "battery",
    name: "Battery",
    icon: Zap,
    description: "Test, charge, or replacement",
    avgPrice: { low: 0, high: 250 },
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "ac-service",
    name: "A/C Service",
    icon: Thermometer,
    description: "Recharge, repair, or inspection",
    avgPrice: { low: 100, high: 300 },
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "inspection",
    name: "Inspection",
    icon: Shield,
    description: "Pre-purchase or state inspection",
    avgPrice: { low: 50, high: 150 },
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export interface Shop {
  id: string
  name: string
  rating: number
  reviewCount: number
  distance: string
  address: string
  verified: boolean
  services: string[]
  prices: Record<string, { price: number; details: string }>
  nextAvailable: string
  image: string
}

export const shops: Shop[] = [
  {
    id: "precision-auto",
    name: "Precision Auto Care",
    rating: 4.8,
    reviewCount: 234,
    distance: "0.8 mi",
    address: "456 Market St",
    verified: true,
    services: ["oil-change", "tire-service", "brake-service", "battery", "inspection"],
    prices: {
      "oil-change": { price: 45, details: "Conventional oil" },
      "tire-service": { price: 25, details: "Rotation & balance" },
      "brake-service": { price: 189, details: "Front pads" },
      "battery": { price: 0, details: "Free testing" },
      "inspection": { price: 79, details: "Full inspection" },
    },
    nextAvailable: "Today, 2:00 PM",
    image: "/shops/precision.jpg",
  },
  {
    id: "quick-lube",
    name: "QuickLube Express",
    rating: 4.5,
    reviewCount: 512,
    distance: "1.2 mi",
    address: "789 Oak Ave",
    verified: true,
    services: ["oil-change", "battery", "tire-service"],
    prices: {
      "oil-change": { price: 39, details: "Conventional oil" },
      "tire-service": { price: 20, details: "Rotation only" },
      "battery": { price: 0, details: "Free testing" },
    },
    nextAvailable: "Today, 3:30 PM",
    image: "/shops/quicklube.jpg",
  },
  {
    id: "honest-mechanic",
    name: "The Honest Mechanic",
    rating: 4.9,
    reviewCount: 89,
    distance: "2.1 mi",
    address: "123 Main St",
    verified: true,
    services: ["oil-change", "tire-service", "brake-service", "battery", "ac-service", "inspection"],
    prices: {
      "oil-change": { price: 55, details: "Synthetic blend" },
      "tire-service": { price: 30, details: "Rotation & balance" },
      "brake-service": { price: 165, details: "Front pads" },
      "battery": { price: 0, details: "Free testing" },
      "ac-service": { price: 129, details: "Recharge" },
      "inspection": { price: 65, details: "Full inspection" },
    },
    nextAvailable: "Tomorrow, 9:00 AM",
    image: "/shops/honest.jpg",
  },
  {
    id: "joes-garage",
    name: "Joe's Garage",
    rating: 4.6,
    reviewCount: 156,
    distance: "2.5 mi",
    address: "555 Industrial Blvd",
    verified: false,
    services: ["oil-change", "brake-service", "tire-service", "inspection"],
    prices: {
      "oil-change": { price: 35, details: "Conventional oil" },
      "brake-service": { price: 145, details: "Front pads" },
      "tire-service": { price: 22, details: "Rotation only" },
      "inspection": { price: 55, details: "Basic inspection" },
    },
    nextAvailable: "Tomorrow, 11:00 AM",
    image: "/shops/joes.jpg",
  },
  {
    id: "dealership",
    name: "AutoNation Service",
    rating: 4.3,
    reviewCount: 892,
    distance: "3.8 mi",
    address: "1000 Auto Mall Dr",
    verified: true,
    services: ["oil-change", "tire-service", "brake-service", "battery", "ac-service", "inspection"],
    prices: {
      "oil-change": { price: 89, details: "Full synthetic" },
      "tire-service": { price: 45, details: "Rotation & balance" },
      "brake-service": { price: 299, details: "Front pads" },
      "battery": { price: 25, details: "Diagnostic" },
      "ac-service": { price: 189, details: "Recharge" },
      "inspection": { price: 125, details: "Multi-point" },
    },
    nextAvailable: "Wed, 10:00 AM",
    image: "/shops/dealership.jpg",
  },
]
