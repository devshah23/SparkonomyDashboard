import { invoicesDummyDataArray } from "@/constants/dummyData";
import InvoiceCard from "./InvoiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Invoice = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mb-4"
      defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl content-text font-semibold hover:no-underline items-center sm:text-2xl">
          Your Invoices
        </AccordionTrigger>
        <AccordionContent>
          <div className="lg:max-h-[680px] lg:overflow-auto flex flex-col gap-4 w-[98%] items-stretch">
            {invoicesDummyDataArray.map((invoice, index) => (
              <InvoiceCard key={index} {...invoice} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Invoice;
