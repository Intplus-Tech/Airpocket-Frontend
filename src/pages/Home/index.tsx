import { useMemo } from "react";
import MaxwidthWrapper from "../../components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Places from "./components/Places";
import Testimonials from "./components/Testimonials";

const Home = () =>
  useMemo(() => {
    {
      return (
        <MaxwidthWrapper>
          <Hero />
          <Places />
          <Testimonials />
          <Newsletter />
        </MaxwidthWrapper>
      );
    }
  }, []);

export default Home;
