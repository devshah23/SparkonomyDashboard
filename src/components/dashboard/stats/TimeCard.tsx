import type { TimePeriodChipItem } from "@/types/componentTypes";
import { formattedDate } from "../../../utils/functions";
import Card from "../../common/Card";
import Chips from "../../common/Chips";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { timePeriodOptions } from "@/constants/constants";
import { useEffect, useState } from "react";
import CalenderInputComponent from "@/components/common/CalenderInput";
import type { TimeRangeType } from "@/types/componentTypes";

const TimeCard = ({
  range,
  setRange,
}: {
  range: TimeRangeType;
  setRange: React.Dispatch<React.SetStateAction<TimeRangeType>>;
}) => {
  const updateRange = () => {
    if (selected.value === "custom") return;
    const startDate = new Date();
    const endDate = new Date();
    if (selected?.value === "1m") {
      startDate.setMonth(startDate.getMonth() - 1);
    } else if (selected?.value === "1y") {
      startDate.setFullYear(startDate.getFullYear() - 1);
    } else if (selected?.value === "3m") {
      startDate.setMonth(startDate.getMonth() - 3);
    }
    setRange({ startDate, endDate });
  };
  const [selected, setSelected] = useState(timePeriodOptions[0]);
  // const defStart = new Date();
  // const defEnd = new Date();
  // defStart.setMonth(defStart.getMonth() - 1);

  // const [range, setRange] = useState<TimeRangeType>({
  //   startDate: defStart,
  //   endDate: defEnd,
  // });
  useEffect(() => {
    updateRange();
  }, [selected]);
  return (
    <Card title={<TimeCardTitle range={range} />}>
      <TimeCardContent
        selected={selected}
        range={range}
        setSelected={setSelected}
        setRange={setRange}
      />
    </Card>
  );
};

type TimeCardTitleProps = {
  range: TimeRangeType;
};

const TimeCardTitle = ({ range }: TimeCardTitleProps) => {
  return (
    <>
      <div className="flex justify-between align-center">
        <h5 className="text-sm  sm:text-lg font-semibold">Time Period</h5>
        <p className="text-xs sm:text-sm">
          {formattedDate(range.startDate)} - {formattedDate(range.endDate)}
        </p>
      </div>
    </>
  );
};
type TimeCardContentProps = {
  selected: TimePeriodChipItem;
  setSelected: (item: TimePeriodChipItem) => void;
  setRange: React.Dispatch<React.SetStateAction<TimeRangeType>>;
};

const TimeCardContent = ({
  selected,
  setSelected,
  range,
  setRange,
}: TimeCardContentProps & { range: TimeRangeType }) => {
  const onClickChipSelected = (item: TimePeriodChipItem) => {
    console.log("Changing Value of Time Period to ", item);
    setSelected(item);
  };
  return (
    <>
      <div className="flex flex-wrap gap-2 text-sm sm:text-base">
        {timePeriodOptions.map((chip, index) => {
          // handle custom chip separately
          if (chip.value === "custom") {
            return (
              <CustomTimeRangeComponent
                key={index}
                setRange={setRange}
                range={range}>
                <Chips
                  {...chip}
                  selected={selected}
                  onClick={onClickChipSelected}
                />
              </CustomTimeRangeComponent>
            );
          }
          return (
            <Chips
              key={index}
              {...chip}
              selected={selected}
              onClick={onClickChipSelected}
            />
          );
        })}
      </div>
    </>
  );
};

function CustomTimeRangeComponent({
  children,
  range,
  setRange,
}: {
  children: React.ReactElement;
  range: TimeRangeType;
  setRange: React.Dispatch<React.SetStateAction<TimeRangeType>>;
}) {
  const [open, setOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState<Date>(range.startDate);
  const [tempEndDate, setTempEndDate] = useState<Date>(range.endDate);

  const setStartDate = (date: Date | undefined) => {
    if (!date) return;

    setTempStartDate((prev: Date) => {
      if (tempEndDate < date) return prev;
      return date;
    });
  };
  const setEndDate = (date: Date | undefined) => {
    if (!date) return;
    setTempEndDate((prev: Date) => {
      if (tempStartDate > date) return prev;
      return date;
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-gray-700">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submit Custom Date Range Form");
            setRange({
              startDate: tempStartDate || range.startDate,
              endDate: tempEndDate || range.endDate,
            });
            setOpen(false);
          }}
          className="grid gap-4">
          <DialogHeader>
            <DialogTitle>Custom Range</DialogTitle>
            <DialogDescription>
              Select the start and end date to view the invoices.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 ">
            <CalenderInputComponent
              label="Start Date"
              value={tempStartDate}
              onChange={setStartDate}
            />
            <CalenderInputComponent
              label="End Date"
              value={tempEndDate}
              onChange={setEndDate}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-purple-700">
              View
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TimeCard;
