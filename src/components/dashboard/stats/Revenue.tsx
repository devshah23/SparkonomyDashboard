import Card from "../../common/Card";
import { CURRENCYSYMBOL } from "../../../constants/constants";

type DataCardProps = {
  title: string;
  value: string;
};

const DataCard = (data: DataCardProps) => {
  return (
    <>
      <Card title={data.title}>
        <span className="text-purple-700 font-semibold">
          {CURRENCYSYMBOL} {data.value}
        </span>
      </Card>
    </>
  );
};

const RevenueDataCards = () => {
  const revenueDataArray = [
    { title: "Total Earnings", value: "1,25,000" },
    {
      title: "Payment Awaited",
      value: "25,000",
    },
    {
      title: "Payments Overdue",
      value: "17,250",
    },
  ];
  return (
    <>
      <DataCard
        title={revenueDataArray[0].title}
        value={revenueDataArray[0].value}
      />
      <div className="grid grid-cols-2 gap-2">
        <DataCard
          title={revenueDataArray[1].title}
          value={revenueDataArray[1].value}
        />
        <DataCard
          title={revenueDataArray[2].title}
          value={revenueDataArray[2].value}
        />
      </div>
    </>
  );
};

export default RevenueDataCards;
