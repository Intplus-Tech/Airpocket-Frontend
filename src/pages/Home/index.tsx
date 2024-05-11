import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";

import MaxwidthWrapper from "../../components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Places from "./components/Places";
import Testimonials from "./components/Testimonials";
import Footer from "@/components/Footer/Footer";
import SearchHistory from "@/components/SearchHistory/SearchHistory";

const Home = () => {
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const result = useSelector((state: RootState) => state.search.result);
  const user = useSelector((state: RootState) => state.user.user);

  if (isLoading) {
    return (
      <h1 className="w-fulll h-[100vh] text-4xl font-bold flex items-center justify-center">
        Loading...
      </h1>
    );
  }

  if (!isLoading && result) {
    navigate("/flight-offers");
  }

  return (
    <MaxwidthWrapper>
      <Hero />
      {user && user._id && <SearchHistory />}
      <Places />
      <Testimonials />
      <Newsletter />
      <Footer />
    </MaxwidthWrapper>
  );
};

export default Home;
