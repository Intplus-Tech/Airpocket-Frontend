import { useEffect, useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

import { getDaysInMonth, months } from "@/utils/monthDAys";
import { countries } from "countries-list";
import { PassengerFormData, countryList } from "@/types/typs";
import { FieldErrors } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { debounce } from "@/utils/debounce";

type PassengerFormProps = {
  index: number;
  register: any;
  fields: any;
  errors: FieldErrors<PassengerFormData>;
};

const PassengerForm = ({ index, register }: PassengerFormProps) => {
  const { toast } = useToast();
  const [list, setList] = useState<countryList[]>([]);
  const currentDate = new Date();
  const monthNumber = currentDate.getMonth() + 1;

  const days = getDaysInMonth(2024, monthNumber);

  const validatePhoneNumber = (value: string) => {
    const parsedNumber = parsePhoneNumberFromString(value);
    console.log(parsedNumber?.countryCallingCode);

    if (parsedNumber && parsedNumber.isValid()) {
      return true;
    } else {
      toast({
        variant: "destructive",
        title: "Phone number must be of international standard",
      });
      return "Invalid phone number";
    }
    // return parsedNumber && parsedNumber.isValid()
    //   ? true
    //   : "Invalid phone number";
  };

  const debouncedValidatePhoneNumber = debounce(validatePhoneNumber, 4000);

  useEffect(() => {
    const countryList = Object.keys(countries).map((countryCode) => ({
      value: countryCode,
      label: countries[countryCode as keyof typeof countries].name,
    }));

    setList(countryList);
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto mb-8 ">
      <section className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full  h-full">
        <div className="w-full">
          <span className="">Firstname</span>
          <label
            htmlFor="firstName"
            className="relative block rounded-md border  "
          >
            <input
              type="text"
              id="firstName"
              {...register(`passengers${index}.name.firstName`, {
                required: "First name is required",
              })}
              className="peer w-full border-none py-2 px-2 bg-transparent  focus:outline-none focus:ring-0"
              placeholder=""
            />
          </label>
        </div>

        <div className="w-full">
          <span className="">Lastname</span>
          <label
            htmlFor="LastName"
            className="relative block rounded-md border"
          >
            <input
              type="text"
              id="Last Name"
              {...register(`passengers${index}.name.lastName`, {
                required: "Last Name name is required",
              })}
              className="peer w-full border-none py-2 px-2 bg-transparent placeholder  focus:outline-none focus:ring-0"
              placeholder=""
            />
            {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Lastname
            </span> */}
          </label>
        </div>

        <div className="w-full  rounded-md bg-white">
          <span className="">Gender</span>
          <select
            name=""
            id=""
            className="w-full  py-2  border rounded-md outline-none "
            {...register(`passengers${index}.gender`)}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>
        {/* date of birth */}
        <div className="w-full">
          <p>Date of Birth {" (DD-MM-YYYY)"}</p>
          <div className="flex border w-full md:min-w-[22rem] rounded-md bg-white ">
            <div className="w-full border-r px-2">
              <select
                name=""
                id=""
                {...register(`passengers${index}.dob.day`)}
                className="w-full py-2 h-full outline-none border-none flex items-center "
              >
                {days.map((day: any) => (
                  <option key={day} value={day ?? "days"}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full border-r px-2 bg-white ">
              <select
                name=""
                id=""
                {...register(`passengers${index}.dob.month`)}
                className="w-full h-full py-2 outline-none border-none flex items-center "
              >
                {months.map((month: any) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full border-r px-2 bg-white">
              <label
                htmlFor="year"
                className="relative w-full block rounded-md "
              >
                <input
                  type="text"
                  id="year"
                  {...register(`passengers${index}.dob.year`, {
                    required: "Year is required",
                    pattern: {
                      value: /^\d{4}$/,
                      message: "Year must be exactly 4 digits",
                    },
                  })}
                  className="peer w-full border-none py-1.5 bg-transparent  focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="2024"
                />
              </label>
            </div>
          </div>
        </div>
        {/* day month and year */}
      </section>

      <section className="flex justify-end">
        <section className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full  justify-between  h-full mt-8">
          <div className="w-full">
            <span>Phone number{" (+234)"}</span>{" "}
            <label
              htmlFor="Phone number"
              className="relative block rounded-md border  "
            >
              <input
                type="tel"
                id="passport"
                {...register(`passengers${index}.contact.phones[0].number`, {
                  required: "Phone number is required",
                  validate: debouncedValidatePhoneNumber,
                })}
                className="peer w-full border-none py-2 px-2 bg-transparent placeholder  focus:outline-none focus:ring-0"
                placeholder="+2348134650533"
              />
              {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Phone {" (E.g+234 )"}
              </span> */}
            </label>
          </div>

          <div className="w-full">
            <span>Passport number</span>
            <label
              htmlFor="LastName"
              className="relative block rounded-md border  "
            >
              <input
                type="text"
                id="passport"
                {...register(`passengers${index}.documents[0].number`, {
                  required: "passport is required",
                })}
                className="peer w-full border-none py-2 px-2 bg-transparent placeholder  focus:outline-none focus:ring-0"
                placeholder=""
              />
              {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Passport number
              </span> */}
            </label>
          </div>

          <div className="w-full">
            <span>Place of issuance</span>
            <label
              htmlFor="LastName"
              className="relative block rounded-md border  "
            >
              <input
                type="text"
                id="Last Name"
                {...register(
                  `passengers${index}.documents[0].issuanceLocation`,
                  {
                    required: "Last Name name is required",
                  }
                )}
                className="peer w-full border-none py-2 px-2 bg-transparent placeholder  focus:outline-none focus:ring-0"
                placeholder=""
              />
              {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Place of Issuance
              </span> */}
            </label>
          </div>

          <div className="w-full">
            <span>Place of birth</span>
            <label
              htmlFor="LastName"
              className="relative block rounded-md border  "
            >
              <input
                type="text"
                id="birthPlace"
                {...register(`passengers${index}.documents[0].birthPlace`, {
                  required: "Place of birth required",
                })}
                className="peer w-full border-none py-2 px-2 bg-transparent placeholder  focus:outline-none focus:ring-0"
                placeholder=""
              />
              {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Place of Birth
              </span> */}
            </label>
          </div>

          <div className="w-full">
            <p className="">Nationality</p>

            <div className=" w-full border  px-2 rounded-md bg-white ">
              <select
                name=""
                id="country"
                defaultValue="Nigeria"
                {...register(`passengers${index}.documents[0].nationality`, {
                  required: "Nationality name is required",
                })}
                className="w-full py-2 h-full outline-none border-none flex items-center "
              >
                {list.map((item: any) => (
                  <option key={item.value} value={item.label ?? "days"}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
      </section>

      <section className="mt-6 flex justify-end">
        <div className="flex flex-wrap md:flex-nowrap items-end  gap-4  justify-between ">
          <div className="w-full">
            <span>Email</span>
            <label
              htmlFor="Email"
              className="relative block rounded-md border  "
            >
              <input
                type="text"
                id="email"
                {...register(`passengers${index}.contact.email`, {
                  required: "email name is required",
                })}
                className="peer w-full border-none py-2 px-2 bg-transparent placeholder  focus:outline-none focus:ring-0"
                placeholder=""
              />
              {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Email
              </span> */}
            </label>
          </div>

          <div className="w-full md:w-fit">
            <p className="py-0.5"> Issuance Date{" (DD-MM-YYYY)"}</p>
            <div className="flex border w-full md:min-w-[18rem] bg-white">
              <div className="w-full border-r px-2">
                <select
                  name=""
                  id=""
                  {...register(`passengers${index}.isd.day`, {
                    required: "Issuance data is required",
                  })}
                  className="w-full h-full py-2 border border-r outline-none border-none flex items-center "
                >
                  {days.map((day: any) => (
                    <option key={day} value={day ?? "days"}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full border-r px-2">
                <select
                  name=""
                  id=""
                  {...register(`passengers${index}.isd.month`)}
                  className="w-full h-full outline-none border-none flex items-center "
                >
                  {months.map((month: any) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full px-2">
                <label
                  htmlFor="year"
                  className="relative w-full block rounded-md "
                >
                  <input
                    type="text"
                    id="year"
                    {...register(`passengers${index}.isd.year`, {
                      required: "Passport Year of expiry  is required",
                      pattern: {
                        value: /^\d{4}$/,
                        message: "Year must be exactly 4 digits",
                      },
                    })}
                    className="peer w-full border-none py-1.5 bg-transparent  focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="2024"
                  />

                  {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Year
                  </span> */}
                </label>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-fit flex flex-col md:flex-row justify-end items-end gap-4">
            <div className="w-full">
              <p className="py-0.5">Nationality</p>

              <div className=" w-full border  px-2 rounded-md bg-white ">
                <select
                  name=""
                  id=""
                  {...register(`passengers${index}.nationality`)}
                  className="w-full py-2 h-full outline-none border-none flex items-center "
                >
                  {list.map((item: any) => (
                    <option key={item.value} value={item.label ?? "days"}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full flex h-fit items-center justify-end ">
              <label
                htmlFor="passportNumber"
                className="relative w-full block rounded-md border  bg-white  "
              >
                <input
                  type="text"
                  id="PassportNO"
                  {...register(`passengers${index}.document[0].number`, {
                    required: "Passport number is required",
                  })}
                  className="peer w-full border-none py-2 px-2 bg-transparent  focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Passport Number
                </span>
              </label>
            </div>
          </div> */}

          <div className="w-full md:w-fit">
            <p className="py-0.5">Expiry Date of Passport {"(DD-MM-YYYY)"}</p>
            <div className="flex border w-full md:min-w-[18rem] bg-white">
              <div className="w-full border-r px-2">
                <select
                  name=""
                  id=""
                  {...register(`passengers${index}.ped.day`)}
                  className="w-full h-full py-2 border border-r outline-none border-none flex items-center "
                >
                  {days.map((day: any) => (
                    <option key={day} value={day ?? "days"}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full border-r px-2">
                <select
                  name=""
                  id=""
                  {...register(`passengers${index}.ped.month`)}
                  className="w-full h-full outline-none border-none flex items-center "
                >
                  {months.map((month: any) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full px-2">
                <label
                  htmlFor="year"
                  className="relative w-full block rounded-md "
                >
                  <input
                    type="text"
                    id="year"
                    {...register(`passengers${index}.ped.year`, {
                      required: "Passport Year of expiry  is required",
                    })}
                    className="peer w-full border-none py-1.5 bg-transparent  focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="2024"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* day month and year */}
        </div>
      </section>
    </main>
  );
};

export default PassengerForm;
