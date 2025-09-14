import type { InvoiceCardProps } from "@/components/dashboard/invoice-section/InvoiceCard";

export const invoicesDummyDataArray: InvoiceCardProps[] = [
  {
    title: "AI LLM Int",
    amount: "1,200",
    status: "updateStatus",
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
    status: "overdue",
    dueDate: new Date("2025-08-15"),
  },
];
