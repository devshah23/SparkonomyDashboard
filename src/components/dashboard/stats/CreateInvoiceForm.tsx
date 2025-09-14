import CalenderInputComponent from "@/components/common/CalenderInput";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { statusOptions } from "@/constants/constants";
import { SelectValue } from "@radix-ui/react-select";
import { useState } from "react";
import CreateInvoiceButton from "./CreateInvoiceButton";
import type { InvoiceCardType } from "@/types/componentTypes";

type CreateInvoiceButtonWithDialogProps = {
  updateInvoicesArray: (newInvoice: InvoiceCardType) => void;
};

const CreateInvoiceButtonWithDialog = ({
  updateInvoicesArray,
}: CreateInvoiceButtonWithDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CreateInvoiceButton onClick={() => setOpen(true)} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <CreateInvoiceFormFields
          updateInvoicesArray={updateInvoicesArray}
          closeModal={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
const CreateInvoiceFormFields = ({
  updateInvoicesArray,
  closeModal,
}: {
  updateInvoicesArray: (invoice: InvoiceCardType) => void;
  closeModal: () => void;
}) => {
  const [invoiceData, setInvoiceData] = useState<InvoiceCardType>({
    name: "General Electric",
    amount: new Number(1200).toString(),
    dueDate: new Date(),
    status: "updateStatus",
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateInvoicesArray(invoiceData);
          closeModal();
        }}>
        <DialogHeader>
          <DialogTitle>Create Invoice</DialogTitle>
          <DialogDescription>Create Invoice for your clients</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue="General Electric"
              onChange={(e) =>
                setInvoiceData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              name="amount"
              defaultValue="1200"
              onChange={(e) =>
                setInvoiceData((prev) => ({ ...prev, amount: e.target.value }))
              }
            />
          </div>
          <div className="grid gap-3">
            <CalenderInputComponent
              value={invoiceData.dueDate}
              label="Select Due Date"
              before
              onChange={(date) =>
                setInvoiceData((prev) => ({
                  ...prev,
                  dueDate: date || new Date(),
                }))
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="status">Status</Label>
            <Select
              value={invoiceData.status}
              onValueChange={(value) =>
                setInvoiceData((prev) => ({
                  ...prev,
                  status: value as InvoiceCardType["status"],
                }))
              }>
              <SelectTrigger>
                <SelectValue placeholder="Update Status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.id} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form>
    </>
  );
};

export default CreateInvoiceButtonWithDialog;
