import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  Table,
  TableBody,
  TableCell,
  // TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Logo from "./assets/logo.svg";
import { Image } from "../Image/Index";
// import { FlightTableData } from "@/types/typs";
import { formatCurrency } from "@/utils/monthDAys";

const TableComponent = () => {
  const tableData = useSelector((state: RootState) => state.search.tableData);
  const dictionaries = useSelector(
    (state: RootState) => state.search.result?.dictionaries
  );

  return (
    // max-w-[20rem] min-w-full overflow-x-auto
    //  min-w-[40rem]
    //px-12
    <section className="  ">
      <Table className=" text-[#606060] z-[-1]">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="border ">
          <TableRow>
            {/* <TableHead className="w-[100px] h-[100px] px-12 md:px-24 bg-[#03C3F8] bg-opacity-10"></TableHead> */}
            {/* {tableData?.map((tableItem: FlightTableData) => {
              return (
                <TableHead className="text-center">
                  <p className="flex flex-col gap-3">
                    <Image
                      src={Logo}
                      alt="Logo"
                      className="h-14 w-14 flex items-center  mx-auto"
                    />
                    <span>
                      {
                        dictionaries?.carriers[
                          tableItem?.carrierCode as unknown as number
                        ]
                      }
                    </span>
                  </p>
                </TableHead>
              );
            })} */}
          </TableRow>
        </TableHeader>
        <TableBody className="border">
          {tableData?.map((tableitem) => (
            <TableRow
              key={tableitem.carrierCode}
              className="text-[13px] font-light tracking-wide"
            >
              <TableCell className="font-medium bg-[#03C3F8] p-1 bg-opacity-10 px-3 md:px-24 whitespace-nowrap py-2 border-r text-center ">
                {tableitem.stops}
              </TableCell>
              <TableCell className="border-r text-center p-1 text-[16px] text-[#1D91CC] whitespace-nowrap">
                {formatCurrency(tableitem.price)}
              </TableCell>
              <TableCell className="border-r text-center text-[16px] p-1 text-[#1D91CC] whitespace-nowrap">
                <p className="flex items-center  gap-2">
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="h-4 w-4 flex items-center shrink-0  mx-auto"
                  />
                  <span className="text-xs sm:text-base">
                    {
                      dictionaries?.carriers[
                        tableitem?.carrierCode as unknown as number
                      ]
                    }
                  </span>
                </p>
              </TableCell>
              {/* <TableCell className="text-center text-[16px] text-[#1D91CC] whitespace-nowrap ">
                {tableitem.totalAmount}
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TableComponent;
