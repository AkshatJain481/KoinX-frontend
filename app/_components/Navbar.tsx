import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[3%] py-5">
      <Image src="/KoinXLogo.svg" alt="KoinX Logo" width={100} height={100} />
      <ul className="max-md:hidden font-semibold flex items-center space-x-9">
        <li>Crypto Taxes</li>
        <li>Free Tools</li>
        <li>Resource Center</li>
        <li>
          <button className="text-white bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-lg py-2 px-7 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500">
            Get Started
          </button>
        </li>
      </ul>
      <GiHamburgerMenu className="md:hidden cursor-pointeri" size={20} color="black" />
    </div>
  );
};

export default Navbar;
