import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import { Image } from "@/components/Image/Index";
import About1 from "@/pages/About/assets/about1.svg";
import About2 from "@/pages/About/assets/about2.svg";

const About = () => {
  const OUR_INFO = [
    {
      id: "1",
      name: "who we are",
      desc: "     Who we are Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed. Scelerisque eleifenddonec pretium vulputate sapien. Eu lobortis elementum nibh tellus molestie. Quis varius quam quisque id diam. Aliquam sem et tortor consequat id porta nibh venenatis .",
    },
    {
      id: "2",
      name: "What we do",
      desc: "     Who we are Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed. Scelerisque eleifenddonec pretium vulputate sapien. Eu lobortis elementum nibh tellus molestie. Quis varius quam quisque id diam. Aliquam sem et tortor consequat id porta nibh venenatis .",
    },
    {
      id: "3",
      name: "Our Mission",
      desc: "     Who we are Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed. Scelerisque eleifenddonec pretium vulputate sapien. Eu lobortis elementum nibh tellus molestie. Quis varius quam quisque id diam. Aliquam sem et tortor consequat id porta nibh venenatis ",
    },
  ];

  return (
    <MaxwidthWrapper>
      <main className=" mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full">
            <h1 className="font-bold py-4">who we are</h1>
            <div className=" h-full flex ">
              <p>
                Who we are Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ullamcorper a lacus vestibulum sed. Scelerisque eleifend
                donec pretium vulputate sapien. Eu lobortis elementum nibh
                tellus molestie. Quis varius quam quisque id diam. Aliquam sem
                et tortor consequat id porta nibh venenatis cras. Duis ut diam
                quam nulla. In metus vulputate eu scelerisque. Id aliquet lectus
                proin nibh nisl condimentum. Purus sit amet volutpat consequat
                mauris nunc congue nisi. Ullamcorper sit amet risus nullam eget
                felis eget nunc.
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
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ullamcorper a lacus vestibulum sed. Scelerisque eleifend donec
                pretium vulputate sapien. Eu lobortis elementum nibh tellus
                molestie. Quis varius quam quisque id diam. Aliquam sem et
                tortor consequat id porta nibh venenatis cras. Duis ut diam quam
                nulla. In metus vulputate eu scelerisque. Id aliquet lectus
                proin nibh nisl condimentum. Purus sit amet volutpat consequat
                mauris nunc congue nisi. Ullamcorper sit amet risus nullam eget
                felis eget nunc. Consectetur adipiscing elit ut aliquam purus.
                Quis viverra nibh cras pulvinar mattis nunc. Scelerisque
                eleifend donec pretium vulputate sapien nec. Tincidunt tortor
              </p>
            </div>
          </div>
          <div className="flex items-center  py-6 order-1">
            <Image src={About2} alt="about img" className="relative" />
          </div>
        </div>

        <div className="mb-10 ">
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
