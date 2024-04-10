import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AccountInformation = () => {
  return (
    <div className="w-full max-w-[580px] bg-gray-50 border border-gray-100 rounded p-1">
      <div>
        <h3 className="bg-[#dff8fe] font-semibold p-4 rounded text-gray-800">
          Your AccountInformation
        </h3>
        <form className="px-4 ">
          <div className="space-y-6 mt-10">
            <div className="flex gap-3">
              <div className="relative">
                <input
                  type="text"
                  className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
                />
                <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                  First Name
                </p>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
                />
                <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                  Last Name
                </p>
              </div>
            </div>

            <div className="relative">
              <PhoneInput
                country={"ng"}
                inputClass="!border !border-gray-300 !focus:border-primaryColor !rounded-lg !w-full !h-10 px-4 py-2 focus:outline-none text-primaryColor"
                buttonClass="!rounded-l-lg !border !border-gray-300"
                containerClass="peer"
                placeholder="+234 8000000000"
              />

              <p className="peer-focus-within:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Phone Number
              </p>
            </div>

            <div className="relative">
              <input
                type="email"
                className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Email address
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Gender
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Address 1
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Address 2 (Optional)
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                State
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                className="peer border border-gray-300 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-300 text-sm bg-gray-50 px-2 absolute top-0 left-6 translate-y-[-50%]">
                Country
              </p>
            </div>
          </div>
          <button className="bg-primaryColor text-white px-16 text-sm rounded-lg py-2 my-10">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
export default AccountInformation;
