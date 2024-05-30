import { useState } from "react";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { Image } from "@/components/Image/Index";
import Airpocket from "@/assets/Airpocket.svg";
import { useToast } from "@/components/ui/use-toast";
import { ChangePassword } from "@/types/typs";
import { useResetPassword } from "./slice/query";
// type Props = {
//   showSignInModal: boolean;
// };

const ResetPassword = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  const { register, handleSubmit, reset } = useForm<ChangePassword>();
  const [showFirstPassword, setShowFirstPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);

  const [passwordMatch] = useState(true);

  // const { data, isLoading, isError } = useResetPassword({ id });

  const toggleShowFirstPassword = () => {
    setShowFirstPassword((prevState) => !prevState);
  };
  const toggleShowSecondPassword = () => {
    setShowSecondPassword((prevState) => !prevState);
  };
  console.log(id);
  const { mutateAsync: resetPassword, isPending } = useResetPassword();

  const handleResetPassword = async (data: ChangePassword) => {
    const updatedData = { ...data, id };

    const response = await resetPassword(updatedData);
    console.log(response);
    if (response?.success) {
      toast({
        // variant: "success",
        title: `${response.success.status}`,
        description: `${response.success.message}`,
      });
      reset();
    } else {
      toast({
        // variant: "destructive",
        title: `${response?.error.status}`,
        description: `${response?.error.message}`,
      });
    }
  };

  return (
    <div className="mt-16">
      <div className="bg-white  mx-auto mt-4 rounded-lg p-2 relative max-w-[480px]">
        <div className="py-6 px-3">
          <div className="w-36 h-10 mx-auto relative">
            <Image src={Airpocket} alt="Logo" />
          </div>
          <div className="text-center my-3 space-y-1">
            <p>Reset Password</p>
            <p className="text-sm text-gray-500 capitalize">
              Create your new login credentials
            </p>
          </div>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <div className="space-y-6 mt-10">
              <div className="relative">
                <input
                  type={showFirstPassword ? "text" : "password"}
                  {...register("password")}
                  className={`peer border rounded-lg w-full h-10 px-4 py-2 focus:outline-none ${
                    passwordMatch
                      ? "border-gray-400 focus:border-[#1B96D6] text-[#1B96D6]"
                      : "border-red-500 text-red-500"
                  }`}
                />
                <p
                  className={`text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%] ${
                    passwordMatch
                      ? "peer-focus:text-[#1B96D6] text-gray-400"
                      : "text-red-500"
                  }`}
                >
                  New Password
                </p>
                <span
                  className={`absolute right-6 translate-y-[100%] ${
                    passwordMatch ? "text-[#1B96D6]" : "text-red-500"
                  }`}
                  onClick={toggleShowFirstPassword}
                >
                  {showFirstPassword ? (
                    <EyeSlashIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </span>
              </div>

              <div className="relative">
                <input
                  type={showSecondPassword ? "text" : "password"}
                  {...register("passwordConfirm")}
                  className={`peer border rounded-lg w-full h-10 px-4 py-2 focus:outline-none ${
                    passwordMatch
                      ? "border-gray-400 focus:border-[#1B96D6] text-[#1B96D6]"
                      : "border-red-500 text-red-500"
                  }`}
                />
                <p
                  className={`text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%] ${
                    passwordMatch
                      ? "peer-focus:text-[#1B96D6] text-gray-400"
                      : "text-red-500"
                  }`}
                >
                  Re Enter password
                </p>
                <span
                  className={`absolute right-6 translate-y-[100%] ${
                    passwordMatch ? "text-[#1B96D6]" : "text-red-500"
                  }`}
                  onClick={toggleShowSecondPassword}
                >
                  {showSecondPassword ? (
                    <EyeSlashIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </span>
              </div>
            </div>
            <small
              className={`${
                passwordMatch ? "opacity-0" : "opacity-100"
              } inline-block text-xs text-center w-full bg-red-50 text-red-500 py-1 rounded-lg my-2`}
            >
              Password do not match!
            </small>
            <button className="text-sm bg-[#1B96D6] w-full rounded-md p-3 text-white mt-2">
              {isPending ? "Loading..." : "Confirm"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
