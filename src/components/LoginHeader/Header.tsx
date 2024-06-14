import { Image } from "../Image/Index";
import HeaderImg from "./assets/header.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-[-1]   ">
      <div className="   ">
        <div className="relative w-full mx-auto h-[20rem] ">
          <Image
            src={HeaderImg}
            alt="banner"
            className="h-[20rem] w-full mx-auto "
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
