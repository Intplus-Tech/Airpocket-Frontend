import { Image } from "../Image/Index";
import HeaderImg from "./assets/header.png";

const Header = () => {
  return (
    <header className="absolute top-0 z-[-1]">
      <div className="mx-auto">
        <div className="relative w-screen h-[20rem] ">
          <Image src={HeaderImg} alt="banner" className="h-[20rem] w-full" />
        </div>
      </div>
    </header>
  );
};
export default Header;
