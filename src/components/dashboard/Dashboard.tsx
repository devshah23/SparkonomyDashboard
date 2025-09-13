import CreateInvoice from "./stats/CreateInvoice";
import IncomeTrendChart from "./stats/IncomeChart";
import RevenueDataCards from "./stats/Revenue";
import TimeCard from "./stats/TimeCard";

const Dashboard = () => {
  return (
    <div className="w-full flex-1 bg-white grid auto-rows-min gap-2 p-3.5 rounded-t-[46px] overflow-hidden text-purple-700">
      <CreateInvoice />
      Dashboard
      <TimeCard />
      <RevenueDataCards />
      <IncomeTrendChart />
    </div>
  );
};

export default Dashboard;
