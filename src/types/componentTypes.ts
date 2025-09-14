export type TimePeriodChipItem = {
  id: number;
  label: string;
  value: string;
  icon?: string;
};
export type CalenderComponentProps = {
  label: string;
  onChange: (date: Date | undefined) => void;
  value: Date | undefined;
};
