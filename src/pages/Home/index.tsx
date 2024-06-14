import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";

import MaxwidthWrapper from "../../components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Places from "./components/Places";
import Testimonials from "./components/Testimonials";
import SearchHistory from "@/components/SearchHistory/SearchHistory";
import { FetchLoader } from "@/components/Loader/Loader";
import { Airline } from "@/constants/AirlineCode";

const Home = () => {
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const result = useSelector((state: RootState) => state.search.result);
  const user = useSelector((state: RootState) => state.user.user);

  if (!isLoading && result?.data) {
    navigate("/flight-offers");
  }
  console.time("mapItems");
  console.log(Airline.length);

  return (
    <MaxwidthWrapper>
      <Hero />
      {user && user._id && <SearchHistory />}
      <Places />
      <Testimonials />
      <Newsletter />
      {isLoading && (
        <section className="fixed w-[100%] h-full bg-[#1B96D6] bg-opacity-30 top-0 left-0 z-[100] ">
          <FetchLoader />
        </section>
      )}
    </MaxwidthWrapper>
  );
};

export default Home;
