import type { InvoiceCardType } from "@/types/componentTypes";

export const invoicesDummyDataArray: InvoiceCardType[] = [
  {
    name: "General Electric",
    amount: "1,200",
    status: "overdue",
    dueDate: new Date("2024-11-05"),
  },
  {
    name: "Siemens AG",
    amount: "1,200",
    status: "paid",
    dueDate: new Date("2025-05-22"),
  },
  {
    name: "Infosys Ltd",
    amount: "3,500",
    status: "unpaid",
    dueDate: new Date("2025-02-10"),
  },
  {
    name: "Deloitte LLP",
    amount: "800",
    status: "partial",
    dueDate: new Date("2025-08-28"),
  },
  {
    name: "Amazon Web Services",
    amount: "450",
    status: "awaited",
    dueDate: new Date("2025-09-05"),
  },
  {
    name: "KPMG India",
    amount: "300",
    status: "disputed",
    dueDate: new Date("2025-09-18"),
  },
  {
    name: "Adobe Inc",
    amount: "2,000",
    status: "partial",
    dueDate: new Date("2025-10-02"),
  },
  {
    name: "Cube Inc",
    amount: "2,000",
    status: "draft",
    dueDate: new Date("2025-07-02"),
  },
  {
    name: "Rest Inc",
    amount: "3,200",
    status: "draft",
    dueDate: new Date("2025-03-02"),
  },
  {
    name: "Tata Consultancy Services",
    amount: "1,000",
    status: "updateStatus",
    dueDate: new Date("2025-10-20"),
  },
];

export const revenueDataArray = [
  { title: "Total Earnings", value: "1,25,000" },
  {
    title: "Payment Awaited",
    value: "25,000",
  },
  {
    title: "Payments Overdue",
    value: "17,250",
  },
];

export const chartData = [
  { month: "Jan", income: 4000, momGrowth: 20 },
  { month: "Feb", income: 5000, momGrowth: 30 },
  { month: "Mar", income: 7000, momGrowth: 10 },
  { month: "Apr", income: 3000, momGrowth: -20 },
  { month: "May", income: 6000, momGrowth: 60 },
  { month: "Jun", income: 2000, momGrowth: -80 },
];
