import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import AboutUs from "../Home/components/aboutUs";
import Footer from "@/components/Footer/Footer";
import Testimonials from "../Home/components/Testimonials";
import home from "@/pages/Home/assets/home.jpeg";

const About = () => {
  return (
    <MaxwidthWrapper>
      <main className=" mx-auto px-2 sm:px-6">
        <h1 className="text-3xl text-center py-2 text-[#1B96D6] capitalize font-bold">
          About us{" "}
        </h1>
        <div className="mt-1">
          Airpockets Travel and Tours Limited was founded with the aim of
          simplifying travel bookings and offering seamless travel experiences
          to customers. We specialize in providing comprehensive travel
          solutions, including airline ticketing, hotel reservations, and tour
          packages, and creating memories that last a lifetime. That's why we're
          dedicated to providing you with the most affordable luxury flights and
          travel packages, without compromising on quality or service.?
        </div>

        <div className="mt-12 mb-8">
          <AboutUs img={home} text={null} />
        </div>
      </main>
      <div className="my-4">
        <Testimonials />
      </div>
      <Footer />
    </MaxwidthWrapper>
  );
};

export default About;
