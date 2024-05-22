import { useEffect, useState } from "react";

import { getDaysInMonth, months } from "@/utils/monthDAys";
import { countries } from "countries-list";
import { countryList } from "@/types/typs";

type PassengerFormProps = {
  index: number;
  register: any;
  fields: any;
};

const PassengerForm = ({ index, register }: PassengerFormProps) => {
  const [list, setList] = useState<countryList[]>([]);
  const currentDate = new Date();

  const monthNumber = currentDate.getMonth() + 1;

  const days = getDaysInMonth(2024, monthNumber);

  useEffect(() => {
    const countryList = Object.keys(countries).map((countryCode) => ({
      value: countryCode,
      label: countries[countryCode as keyof typeof countries].name,
    }));

    setList(countryList);
  }, []);

  return (
    <main className="max-w-screen-lg mx-auto mb-8">
      <section className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full  h-full">
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="relative block rounded-md border  "
          >
            <input
              type="text"
              id="firstName"
              {...register(`passengers${index}.firstName`, {
                required: "First name is required",
              })}
              className="peer w-full border-none py-2 px-2 bg-transparent  focus:outline-none focus:ring-0"
              placeholder="First Name"
            />
          </label>
        </div>

        <div className="w-full">
          <label
            htmlFor="LastName"
            className="relative block rounded-md border  "
          >
            <input
              type="text"
              id="Last Name"
              {...register(`passengers${index}.lastName`, {
                required: "Last Name name is required",
              })}
              className="peer w-full border-none py-2 px-2 bg-transparent placeholder  focus:outline-none focus:ring-0"
              placeholder="Last Name"
            />
          </label>
        </div>

        <div className="w-full border px-2 rounded-md">
          <select
            name=""
            id=""
            className="w-full  py-2 border-none outline-none "
            {...register(`passengers${index}.gender`)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* date of birth */}
        <div className="w-full">
          <p>Date of Birth</p>
          <div className="flex border w-full md:min-w-[22rem] rounded-md ">
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

            <div className="w-full border-r px-2 ">
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

            <div className="w-full border-r px-2">
              <label
                htmlFor="year"
                className="relative w-full block rounded-md "
              >
                <input
                  type="text"
                  id="year"
                  {...register(`passengers${index}.dob.year`)}
                  className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder=""
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Year
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* day month and year */}
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap md:flex-nowrap items-end justify-end gap-4">
          <div className="w-full md:w-fit flex flex-col md:flex-row justify-end gap-4">
            <div className=" w-full border  px-2 rounded-md ">
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

            <div className="w-full flex justify-end ">
              <label
                htmlFor="passportNumber"
                className="relative w-full block rounded-md border  "
              >
                <input
                  type="text"
                  id="PassportNO"
                  {...register(`passengers${index}.passportNumber`, {
                    required: "Passport number is required",
                  })}
                  className="peer w-full border-none py-2 px-2 bg-transparent  focus:outline-none focus:ring-0"
                  placeholder="Passport number"
                />
              </label>
            </div>
          </div>

          <div className="w-full md:w-fit">
            <p className="py-0.5">Expiry Date of Passport</p>
            <div className="flex border w-full md:min-w-[18rem]">
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
                    className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder=""
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Year
                  </span>
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
