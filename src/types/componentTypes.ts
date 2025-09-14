export type TimePeriodChipItem = {
  id: number;
  label: string;
  value: string;
  icon?: string;
};

export type TimeRangeType = {
  startDate: Date;
  endDate: Date;
};

export type CalenderComponentProps = {
  label: string;
  onChange: (date: Date | undefined) => void;
  value: Date | undefined;
  before?: boolean;
};
export type InvoiceCardType = {
  name: string;
  amount: string;
  status: InvoiceStatus;
  dueDate: Date;
};

// 1️⃣ Define allowed statuses
export type InvoiceStatus =
  | "paid"
  | "unpaid"
  | "overdue"
  | "awaited"
  | "partial"
  | "disputed"
  | "draft"
  | "updateStatus";
