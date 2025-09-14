type CardProps = {
  title?: React.ReactNode;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 border-2 content-text border-neutral-200 rounded-2xl px-2.5 py-3 sm:text-xl">
      {title && <div>{title}</div>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
