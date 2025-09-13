import { formattedDate } from "../../../utils/functions";
import Card from "../../common/Card";
import Chips from "../../common/Chips";
import PremiumThroneIcon from "../../../assets/PremiumThroneIcon.png";
import CalenderIcon from "../../../assets/CalenderIcon.png";
import type { ChipItem } from "../../../types/componentTypes";

const TimeCard = () => {
  return (
    <Card title={<TimeCardTitle />}>
      <TimeCardContent />
    </Card>
  );
};

const TimeCardTitle = () => {
  return (
    <>
      <div className="flex justify-between align-center">
        <h5 className="text-sm font-semibold">Time Period</h5>
        <p className="text-xs">
          {formattedDate(new Date(1990, 11, 23))} -{" "}
          {formattedDate(new Date(1990, 12, 23))}
        </p>
      </div>
    </>
  );
};

const TimeCardContent = () => {
  const selected = "1m";

  const chipsArray: ChipItem[] = [
    { label: "1 Month", value: "1m" },
    { label: "3 Months", value: "3m" },
    { label: "1 Year", value: "1y", icon: PremiumThroneIcon },
    { label: "Custom", value: "custom", icon: CalenderIcon },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-2 text-sm">
        {chipsArray.map((chip, index) => (
          <Chips key={index} {...chip} selected={selected} />
        ))}
      </div>
    </>
  );
};

export default TimeCard;
