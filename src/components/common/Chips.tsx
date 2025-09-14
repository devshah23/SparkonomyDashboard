import type { TimePeriodChipItem } from "../../types/componentTypes";
const Chips = ({
  selected,
  onClick,
  ...chip
}: TimePeriodChipItem & {
  selected: TimePeriodChipItem;
  onClick: (item: TimePeriodChipItem) => void;
}) => {
  return (
    <button
      onClick={() => {
        onClick(chip);
      }}
      className={`w-fit flex items-center border border-neutral-200 px-3 py-1
       rounded-full font-sm  gap-2 hover:bg-purple-50 transition ${
         selected.id === chip.id ? " bg-purple-100 " : ""
       } `}>
      {chip.icon && <img src={chip.icon} className="w-4 h-4" />}
      <span
        className={`${selected.value === chip.value ? "gradient-text " : ""}`}>
        {chip.label}
      </span>
    </button>
  );
};

export default Chips;
