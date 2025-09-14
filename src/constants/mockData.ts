import type { InvoiceCardProps } from "@/components/dashboard/invoice-section/InvoiceCard";

export const invoicesDummyDataArray: InvoiceCardProps[] = [
  {
    title: "AI LLM Int",
    amount: "1,200",
    status: "overdue",
    dueDate: new Date("2025-09-01"),
  },
  {
    title: "Website Redesign",
    amount: "1,200",
    status: "paid",
    dueDate: new Date("2025-09-01"),
  },
  {
    title: "Mobile",
    amount: "3,500",
    status: "unpaid",
    dueDate: new Date("2025-09-15"),
  },
  {
    title: "SEO Opt",
    amount: "800",
    status: "partial",
    dueDate: new Date("2025-09-20"),
  },
  {
    title: "Cloud Hosting",
    amount: "450",
    status: "awaited",
    dueDate: new Date("2025-09-25"),
  },
  {
    title: "Income Tax",
    amount: "300",
    status: "disputed",
    dueDate: new Date("2025-08-28"),
  },
  {
    title: "UI/UX Package",
    amount: "2,000",
    status: "draft",
    dueDate: new Date("2025-09-30"),
  },
  {
    title: "Annual",
    amount: "1,000",
    status: "updateStatus",
    dueDate: new Date("2025-08-15"),
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
