// import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";

import Airpocket from "@/app/assets/airpocket.svg";
// import { useForgotPassword } from "./slice/query";
// import { useToast } from "@/components/ui/use-toast";
import { Image } from "@/components/Image/Index";

type Props = {
  setFormType: React.Dispatch<React.SetStateAction<string>>;
};

const ForgetPassword = ({ setFormType }: Props) => {
  //   const { toast } = useToast();
  const { register, handleSubmit } = useForm();

  //   const { mutateAsync: forgotPassword } = useForgotPassword();

  const handleForgotPassword = async (data: FieldValues) => {
    console.log(data);
    // const response = await forgotPassword(data);
    // console.log(response);
    // if (response?.success) {
    //   toast({
    //     // variant: "success",
    //     title: `${response.success.status}`,
    //     description: `${response.success.message}`,
    //   });
    //   reset();
    // } else {
    //   toast({
    //     // variant: "destructive",
    //     title: `${response?.error.status}`,
    //     description: `${response?.error.message}`,
    //   });
    // }
  };

  return (
    <div className=" w-full mr-4">
      <div className="bg-red-500   mx-auto mt-4  rounded-lg p-2 relative max-w-[480px]">
        <div className="py-6 px-3">
          <div className="w-36 h-10 mx-auto relative">
            <Image src={Airpocket} alt="Logo" />
          </div>
          <div className="text-center my-3 space-y-1">
            <p>Forget Password</p>
            <p className="text-sm text-gray-500 capitalize">
              Enter your email to resent your password
            </p>
          </div>
          <form onSubmit={handleSubmit(handleForgotPassword)}>
            <div className="space-y-6 mt-10">
              <div className="relative">
                <input
                  type="email"
                  {...register("email")}
                  className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
                />
                <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                  Email Address
                </p>
              </div>
            </div>
            <button
              type="submit"
              onClick={() => setFormType("")}
              className="text-sm bg-gray-100 w-full rounded-md p-3 text-gray-500 mt-10"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
