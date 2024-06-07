import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import SearchHistory from "@/components/SearchHistory/SearchHistory";
import Places from "../Home/components/Places";
import Footer from "@/components/Footer/Footer";
import Newsletter from "../Home/components/Newsletter";
import { FetchLoader } from "@/components/Loader/Loader";
import { RootState } from "@/store/store";
import Hero from "../Home/components/Hero";
import MobileApp from "@/components/MobileApp/MobileApp";

const Flight = () => {
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const result = useSelector((state: RootState) => state.search.result);
  const user = useSelector((state: RootState) => state.user.user);

  if (!isLoading && result?.data) {
    navigate("/flight-offers");
  }

  return (
    <MaxwidthWrapper>
      <Hero />
      {user && user._id && <SearchHistory />}
      <Places />
      <MobileApp />
      <Newsletter />
      <Footer />
      {isLoading && (
        <section className="fixed w-[100vw] h-full bg-[#1B96D6] bg-opacity-30 top-0 left-0 z-[100] ">
          <FetchLoader />
        </section>
      )}
    </MaxwidthWrapper>
  );
};

export default Flight;
