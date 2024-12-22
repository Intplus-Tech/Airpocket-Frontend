import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import { Image } from "@/components/Image/Index";
import About1 from "@/pages/About/assets/about1.svg";
import About2 from "@/pages/About/assets/about2.svg";

const About = () => {
  const OUR_INFO = [
    {
      id: "1",
      name: "who we are",
      desc: "  We provide travelers the lowest luxury rates in the market while flying in style, enjoying luxury and exclusivity at an affordable price. Contact us anytime, 24/7, from Monday to Sunday, and make the most of our summer deals, focusing on youthful exploration",
    },
    {
      id: "2",
      name: "Our Mission",
      desc: "To deliver exceptional travel experiences by providing personalized and efficient booking services, ensuring that customers can travel with ease  and  confidence.",
    },
    {
      id: "3",
      name: "Our Vision",
      desc: " To become a leading travel and tour service provider known for its reliability, customer satisfaction, and innovative travel solutions. ",
    },
  ];

  return (
    <MaxwidthWrapper>
      <main className=" mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full">
            <h1 className="font-bold py-4 capitalize">who we are</h1>
            <div className=" h-full flex ">
              <p>
                Airpockets Travel and Tours Limited was founded with the aim of
                simplifying travel bookings and offering seamless travel
                experiences to customers. We specialize in providing
                comprehensive travel solutions, including airline ticketing,
                hotel reservations, and tour packages, and creating memories
                that last a lifetime. That's why we're dedicated to providing
                you with the most affordable luxury flights and travel packages,
                without compromising on quality or service.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center py-6">
            <Image src={About1} alt="about img" className="mx-auto  relative" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
          <div className="h-full order-2">
            <div className=" h-full flex mt-6 ">
              <p>
                As one of the largest online tour operator and travel arranger
                in Nigeria and Africa, Airpockets offers a comprehensive range
                of travel services, including flight bookings, hotel and
                shortlet reservations, visa assistance, Study assistance, and
                holiday packages. We provide swift online booking of affordable
                flight tickets for some of the world&apos;s leading airlines,
                such as Air Peace, Arik Air, and Dana Air, and other
                international airlines.
              </p>
            </div>
          </div>
          <div className="flex items-center  py-6 order-1">
            <Image src={About2} alt="about img" className="relative" />
          </div>
        </div>

        <div className="mb-20 ">
          <h1 className="text-center font-bold text-3xl">Our value</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6">
            {OUR_INFO.map((info) => (
              <div key={info.id} className="">
                <h1 className="text-center font-bold py-1 capitalize">
                  {info.name}
                </h1>
                <p>{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </MaxwidthWrapper>
  );
};

export default About;
