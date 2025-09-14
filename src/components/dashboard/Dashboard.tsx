import { useState } from "react";
import Invoice from "./invoice-section/Invoice";
import CreateInvoiceButtonWithDialog from "./stats/CreateInvoiceForm";
import IncomeTrendChart from "./stats/IncomeChart";
import RevenueDataCards from "./stats/Revenue";
import TimeCard from "./stats/TimeCard";
import { invoicesDummyDataArray } from "@/constants/mockData";
import type { InvoiceCardType, TimeRangeType } from "@/types/componentTypes";

const Dashboard = () => {
  const defStart = new Date();
  const defEnd = new Date();
  defStart.setMonth(defStart.getMonth() - 1);

  const [range, setRange] = useState<TimeRangeType>({
    startDate: defStart,
    endDate: defEnd,
  });
  const [invoicesArray, setInvoicesArray] = useState(invoicesDummyDataArray);
  const updateInvoicesArray = (newInvoice: InvoiceCardType) => {
    setInvoicesArray((prev) => [newInvoice, ...prev]);
  };

  const invoiceArrayToShow = invoicesArray.filter(
    (invoice) =>
      invoice.dueDate >= range.startDate && invoice.dueDate <= range.endDate
  );

  return (
    <div className="w-full flex-1 bg-white  rounded-t-[46px] overflow-hidden text-purple-700 p-3.5 sm:rounded-t-[60px] sm:p-6 lg:p-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 auto-rows-min gap-3 lg:gap-6">
        <div className="grid gap-3 md:col-start-1  lg:grid-cols-2 lg:col-start-1 ">
          <CreateInvoiceButtonWithDialog
            updateInvoicesArray={updateInvoicesArray}
          />

          <TimeCard range={range} setRange={setRange} />
          <div className=" lg:col-span-2 ">
            <RevenueDataCards />
          </div>
          <div className="lg:col-span-2">
            <IncomeTrendChart />
          </div>
        </div>
        <div className="md:col-start-2 md:row-span-3 lg:col-start-2 lg:row-span-3">
          <Invoice invoicesArray={invoiceArrayToShow} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
