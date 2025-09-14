import Card from "../../common/Card";
import { CURRENCYSYMBOL } from "../../../constants/constants";
import { revenueDataArray } from "../../../constants/mockData";

type DataCardProps = {
  title: string;
  value: string;
};

const DataCard = (data: DataCardProps) => {
  return (
    <>
      <Card title={data.title}>
        <span className="text-purple-700 font-semibold sm:text-xl">
          {CURRENCYSYMBOL} {data.value}
        </span>
      </Card>
    </>
  );
};

const RevenueDataCards = () => {
  return (
    <>
      <DataCard
        title={revenueDataArray[0].title}
        value={revenueDataArray[0].value}
      />
      <div className="grid grid-cols-2 gap-3 mt-3">
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
