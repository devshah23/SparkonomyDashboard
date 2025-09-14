import AddIcon from "../../../assets/AddIcon.png";

const CreateInvoiceButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full flex flex-col items-center gap-5 mb-6 lg:mb-0">
      <button
        onClick={onClick}
        className="w-full flex flex-col items-center bg-zinc-100 rounded-4xl  p-4 hover:bg-zinc-300 focus:ring-2 transition">
        <img src={AddIcon} alt="Add Icon" className="w-12 h-12" />
        <h4 className="gradient-text text-xl font-semibold mt-2.5">
          Create New Invoice
        </h4>
        <p className="content-text text-[0.65rem] mt-0.5 sm:text-sm ">
          Start by creating and sending new invoice
        </p>
      </button>
      <p className="text-[0.75rem] text-center sm:text-[0.85rem] lg:hidden">
        Or Upload an existing invoice and set payment remainder
      </p>
    </div>
  );
};

export default CreateInvoiceButton;
