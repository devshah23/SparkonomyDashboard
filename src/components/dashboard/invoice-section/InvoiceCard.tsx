import Card from "@/components/common/Card";
import { formattedDate } from "@/utils/functions";
import InvoiceChipSelect from "./ChipSelect";
import EditPenIcon from "../../../assets/EditPenIcon.png";
import { CURRENCYSYMBOL } from "../../../constants/constants";
import { useState } from "react";
export type InvoiceCardProps = {
  title: string;
  amount: string;
  status: string;
  dueDate: Date;
};

const InvoiceCard = (cardData: InvoiceCardProps) => {
  const [selected, setSelected] = useState(cardData.status);
  return (
    <Card>
      <div className="w-full flex justify-between items-center">
        <div>
          <h5 className="text-gray-500 text-md font-semibold">
            {cardData.title}
          </h5>
          <span className="text-[13px] text-gray-400 sm:text-base">
            {CURRENCYSYMBOL}
            {cardData.amount}, Due:{" "}
            {formattedDate(cardData.dueDate).replace(/:/g, "-")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <InvoiceChipSelect
            value={selected}
            onChange={(value: string) => {
              console.log("Changing Status to ", value);
              setSelected(value);
            }}
          />
          {cardData.status == "paid" && (
            <img
              src={EditPenIcon}
              alt="Edit"
              className="w-4 h-4 inline cursor-pointer"
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default InvoiceCard;
