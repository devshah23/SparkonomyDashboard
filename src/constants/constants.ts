import type { TimePeriodChipItem } from "@/types/componentTypes";
import PremiumThroneIcon from "@/assets/PremiumThroneIcon.png";
import CalenderIcon from "@/assets/CalenderIcon.png";
export const CURRENCYSYMBOL = "$";

export const statusOptions = [
  {
    id: 1,
    value: "paid",
    label: "Paid",
    statusStyles: "bg-green-100 text-green-700",
  },

  {
    id: 2,
    value: "disputed",
    label: "Disputed",
    statusStyles: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    value: "overdue",
    label: "Overdue",
    statusStyles: "bg-red-100 text-red-700",
  },
  {
    id: 4,
    value: "partial",
    label: "Partially Paid",
    statusStyles: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 5,
    value: "unpaid",
    label: "Unpaid",
    statusStyles: "bg-neutral-100 content-text",
  },
  {
    id: 6,
    value: "draft",
    label: "Draft",
    statusStyles: "bg-neutral-100 content-text",
  },
  {
    id: 7,
    value: "awaited",
    label: "Awaited",
    statusStyles: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 8,
    value: "updateStatus",
    label: "Update Status",
    statusStyles: "bg-purple-700 text-white",
  },
];

export const timePeriodOptions: TimePeriodChipItem[] = [
  {
    id: 0,
    label: "1 Month",
    value: "1m",
  },
  {
    id: 1,
    label: "3 Months",
    value: "3m",
  },
  {
    id: 2,
    label: "1 Year",
    value: "1y",
    icon: PremiumThroneIcon,
  },
  {
    id: 3,
    label: "Custom",
    value: "custom",
    icon: CalenderIcon,
  },
];
