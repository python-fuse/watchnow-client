import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex justify-between items-center h-14 border-b-2 bg-violet-500 p-4 py-4">
      <Link href="/">
        <Image src={logo} alt="WatchNow" width={80} />
      </Link>

      <h2 className="title text-2xl font-bold ">Tube Buddy</h2>

      <button className="flex  items-center gap-2">
        Log out
        <FaSignOutAlt size={22} />
      </button>
    </nav>
  );
};
export default Header;
