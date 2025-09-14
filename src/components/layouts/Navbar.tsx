import ProfileIcon from "../../assets/ProfileIcon.png";
import BackArrowIcon from "../../assets/BackArrowIcon.png";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-5 my-4">
      <NavbarButton />
      <h3 className="font-semibold text-[1.1rem] sm:text-xl">Dashboard</h3>
      <ProfileIconButton />
    </div>
  );
};

const NavbarButton = () => {
  return (
    <button className="flex items-center gap-2">
      <img src={BackArrowIcon} alt="" className="w-2.5 " />
      <span className="text-lg text-zinc-800 sm:text-xl">Back</span>
    </button>
  );
};

const ProfileIconButton = () => {
  return (
    <button className="rounded-[50%]">
      <img src={ProfileIcon} alt="" className="w-10 rounded-[50%] sm:w-12" />
    </button>
  );
};

export default Navbar;
