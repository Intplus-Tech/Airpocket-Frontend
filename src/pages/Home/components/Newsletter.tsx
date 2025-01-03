import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Image } from "../../../components/Image/Index";
import Sisters from "../assets/Sisters.svg";
import { FieldValues, useForm } from "react-hook-form";
import { subscribeNewLetter } from "./slice/api";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const handleNewsletter = async (data: FieldValues) => {
    const response = await subscribeNewLetter(data);
    response.success
      ? toast({ title: response.success.message })
      : toast({
          variant: "destructive",
          title: response.error?.response.message,
        });
    reset();
  };
  return (
    <section className=" max-w-screen-xl mx-auto mt-16 my-8 pl-2 w-full">
      <div className="w-full px-4  lg:pl-12   mx-auto space-y-16 bg-[#EEECEC] rounded-md shadow-lg shadow-slate-300 max-h-[260px] lg:flex items-end justify-between">
        <div className="space-y-4 py-8 self-center">
          <h2 className="text-[#1B96D6] tracking-wid font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[45px] sm:whitespace-nowrap">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xs text-gray-600 lg:text-sm max-w-[21rem]">
            Get weekly update about our product on your email, no spam
            guaranteed we promise ✌️
          </p>
          <form onSubmit={handleSubmit(handleNewsletter)}>
            <div className="relative max-w-[34rem]">
              <span className="absolute left-4 top-[50%] translate-y-[-50%] bg-[#F8F8F8] p-2">
                <EnvelopeIcon className="h-4 w-4" />
              </span>
              <input
                type="email"
                {...register("email")}
                placeholder="youremail123@gmail.com"
                className="bg-white py-4 pl-14 text-gray-600 focus:outline-none text-xs lg:text-sm w-[90%]"
              />
              <button
                type="submit"
                className="absolute top-4 right-0  py-3 px-6 bg-[#1B96D6] text-white text-sm"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>

        <div className="hidden lg:block relativ  w-[458px] h-full mb-8   overflow-hidden">
          <Image
            src={Sisters}
            alt="newsletter"
            className="flex items-end justify-end w-fit "
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
