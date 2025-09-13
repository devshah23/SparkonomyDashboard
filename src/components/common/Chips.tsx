import type { ChipItem } from "../../types/componentTypes";

const Chips = ({ selected, ...chip }: ChipItem & { selected: string }) => {
  return (
    <button
      className={` flex border border-neutral-200 px-3 py-1
      ${
        selected === chip.value ? " bg-purple-100 " : ""
      } rounded-full font-sm w-fit gap-2`}>
      {chip.icon && <img src={chip.icon} className="w-4 h-4" />}
      <span className={`${selected === chip.value ? "gradient-text " : ""}`}>
        {chip.label}
      </span>
    </button>
  );
};

export default Chips;
