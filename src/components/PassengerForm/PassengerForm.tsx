import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateYears, getDaysInMonth, months } from "@/utils/monthDAys";

const PassengerForm = () => {
  const currentDate = new Date();

  const monthNumber = currentDate.getMonth() + 1;

  const days = getDaysInMonth(2024, monthNumber);
  const years = generateYears();

  return (
    <main className="max-w-screen-lg mx-auto mb-8">
      <section className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full  h-full">
        <div className="w-full">
          <label
            htmlFor="Username"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="Username"
              className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Username"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Username
            </span>
          </label>
        </div>

        <div className="w-full">
          <label
            htmlFor="LastName"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="Username"
              className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Username"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Username
            </span>
          </label>
        </div>

        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full lg:w-[200px] px-4">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Male</SelectItem>
              <SelectItem value="dark">Femail</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* date of birth */}
        <div className="w-full">
          <p>Date of Birth</p>
          <div className="flex border w-full md:min-w-[22rem] ">
            <div className="w-full">
              <Select>
                <SelectTrigger className="w-full rounded-none  px-4">
                  <SelectValue placeholder="Day" className="" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-none ">
                  {days.map((day: any) => (
                    <SelectItem key={day} value={day ?? "days"}>
                      {day}
                    </SelectItem>
                  ))}
                  {/* <SelectItem value="dark">Femail</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Select>
                <SelectTrigger className="w-full rounded-none px-4">
                  <SelectValue placeholder="Month" className="px-3" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-none">
                  {months.map((month: any) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Select>
                <SelectTrigger className="w-full rounded-none px-4">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-none w-full flex-[2]">
                  {years.map((year: any) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* day month and year */}
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap md:flex-nowrap items-end justify-end gap-4">
          <div className="w-full md:w-fit flex flex-col md:flex-row justify-end gap-4">
            <div className=" w-full ">
              <Select>
                <SelectTrigger className=" w-full md:w-[200px] px-4">
                  <SelectValue placeholder="Nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Male</SelectItem>
                  <SelectItem value="dark">Femail</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full flex justify-end ">
              <label
                htmlFor="Username"
                className="relative w-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="PassportNO"
                  className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="PassportNO"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Passport No
                </span>
              </label>
            </div>
          </div>

          <div className="w-full md:w-fit">
            <p>Date of Birth</p>
            <div className="flex border w-full md:min-w-[22rem]">
              <div className="w-full">
                <Select>
                  <SelectTrigger className="w-full rounded-none  px-4">
                    <SelectValue placeholder="Day" className="" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-none">
                    {days.map((day: any) => (
                      <SelectItem key={day} value={day ?? "days"}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full">
                <Select>
                  <SelectTrigger className="w-full rounded-none px-4">
                    <SelectValue placeholder="Month" className="px-3" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-none">
                    {months.map((month: any) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full">
                <Select>
                  <SelectTrigger className="w-full rounded-none px-4">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-none w-full flex-[2]">
                    {years.map((year: any) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
