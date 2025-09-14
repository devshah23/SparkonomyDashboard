import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { InvoiceCardType } from "@/types/componentTypes";
import InvoiceCard from "./InvoiceCard";

type InvoiceProps = {
  invoicesArray: InvoiceCardType[];
};

const Invoice = ({ invoicesArray }: InvoiceProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mb-4"
      defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl content-text font-semibold hover:no-underline items-center sm:text-2xl sm:pt-0">
          Your Invoices
        </AccordionTrigger>
        <AccordionContent>
          <div
            className="lg:max-h-[680px] lg:overflow-y-auto flex flex-col gap-4 w-[98%] items-stretch pr-2 [&::-webkit-scrollbar]:w-0
            hover:[&::-webkit-scrollbar]:w-1.5
          hover:[&::-webkit-scrollbar-thumb]:bg-gray-200
            hover:[&::-webkit-scrollbar-thumb]:rounded-full
            scrollbar-thin
            scrollbar-track-transparent">
            {invoicesArray.map((invoice) => (
              <InvoiceCard key={invoice.name} {...invoice} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Invoice;
// overflow-y-auto
