import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statusOptions } from "@/constants/constants";

export default function InvoiceChipSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const selected = statusOptions.find((s) => s.value === value);
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`min-w-[90px] border-0 font-medium rounded-2xl focus:outline-none focus:ring-0 sm:text-lg  ${
          selected ? selected.statusStyles : "bg-purple-700 text-white"
        } `}>
        <SelectValue placeholder="Update Status"></SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-zinc-50 border border-zinc-100">
        {statusOptions.map((option) => (
          <SelectItem
            key={option.id}
            value={option.value}
            className={`
            rounded-2xl sm:text-base `}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
