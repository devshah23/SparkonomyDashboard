import SprakonomyLogo from "../../assets/SparkonomyLogo.png";
const Footer = () => {
  return (
    <div className="w-full bg-white min-h-[150px]">
      <footer className="w-11/12  max-w-[400px] m-auto flex flex-col items-center justify-center  py-4 border-t-2 border-zinc-100 ">
        <img
          src={SprakonomyLogo}
          alt="Sparkonomy Logo"
          className="w-25 sm:w-30"
        />
        <span className="content-text text-[13px]/4 sm:text-base">
          sparking the creator economy
        </span>
      </footer>
    </div>
  );
};

export default Footer;
