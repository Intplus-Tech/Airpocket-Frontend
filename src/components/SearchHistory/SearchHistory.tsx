import { Image } from "../Image/Index";
import History from "./assets/History.svg";

const SearchHistory = () => {
  return (
    <main className="my-6">
      <div className=" flex w-full justify-between items-center">
        <p className="flex items-center gap-4">
          <Image src={History} alt="History" />
          <span>Search History</span>
        </p>
        <span className="text-[#1D91CC]">Clear All</span>
      </div>
    </main>
  );
};

export default SearchHistory;
