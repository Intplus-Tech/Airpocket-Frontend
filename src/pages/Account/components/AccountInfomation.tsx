import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useGetUserInfo } from "../slice/query";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
// import { useToast } from "@/components/ui/use-toast";
import { FieldValues, useForm } from "react-hook-form";

const AccountInformation = () => {
  // const { toast } = useToast();
  const user = useSelector((state: RootState) => state.user.user);
  const { isLoading, data } = useGetUserInfo({ id: user?._id });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstname: data?.success.data?.firstname || "",
      lastname: data?.success.data?.lastname || "",
      gender: data?.success.data?.gender || "",
      email: data?.success.data?.email || "",
      address1: data?.success.data?.address1 || "",
      address2: data?.success.data?.address2 || "",
      state: data?.success.data?.state || "",
      country: data?.success.data?.country || "",
    },
  });

  if (isLoading) {
    return (
      <div>
        <h2>loading....</h2>
      </div>
    );
  }

  // useEffect(() => {
  //   if (data?.success) {
  //     toast({
  //       description: ` successfull`,
  //     });
  //   } else {
  //     toast({
  //       description: `${data?.error?.response.message}`,
  //     });
  //   }
  // }, [data]);

  const handleOnSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-[580px] mx-auto bg-gray-50 border border-gray-100 rounded p-1">
      <div>
        <h3 className="bg-[#dff8fe] font-semibold p-4 rounded text-gray-800">
          Your AccountInformation
        </h3>
        <form className="px-4 " onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="space-y-6 mt-10">
            <div className="flex gap-3 w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  {...register("firstname")}
                  className="peer border border-gray-300 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
                />
                <p className="peer-focus:text-[#1D91CC] text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                  First Name
                </p>
              </div>

              <div className="relative w-full">
                <input
                  type="text"
                  {...register("lastname")}
                  className="peer border border-gray-300 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
                />
                <p className="peer-focus:text-[#1D91CC] text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                  Last Name
                </p>
              </div>
            </div>

            <div className="relative">
              <PhoneInput
                country={"ng"}
                value={""}
                inputClass="!border !border-gray-300 !focus:border-[#1D91CC] !rounded-lg !w-full !h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
                buttonClass="!rounded-l-lg !border !border-gray-300"
                containerClass="peer"
                placeholder="+234 8000000000"
              />

              <p className="peer-focus-within:text-[#1D91CC] text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Phone Number
              </p>
            </div>

            <div className="relative">
              <input
                type="email"
                {...register("email")}
                className="peer border border-gray-300 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Email address
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                {...register("gender")}
                className="peer border border-gray-300 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Gender
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                {...register("address1")}
                className="peer border border-gray-300 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Address 1
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                {...register("address2")}
                className="peer border border-gray-300 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Address 2 (Optional)
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                {...register("state")}
                className="peer border border-gray-300 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                State
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                {...register("country")}
                className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Country
              </p>
            </div>
          </div>
          <button className="bg-[#1D91CC] text-white px-16 text-sm rounded-lg py-2 my-10">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
export default AccountInformation;
