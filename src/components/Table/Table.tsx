import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Logo from "./assets/logo.svg";
import { Image } from "../Image/Index";
import { FlightTableData } from "@/types/typs";
import { formatCurrency } from "@/utils/monthDAys";

const TableComponent = () => {
  const tableData = useSelector((state: RootState) => state.search.tableData);
  const dictionaries = useSelector(
    (state: RootState) => state.search.result?.dictionaries
  );
  console.log("table", dictionaries);

  return (
    <section className=" max-w-[20rem] min-w-full overflow-x-auto ">
      <Table className=" text-[#606060] min-w-[40rem] z-[-1]">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="border ">
          <TableRow>
            <TableHead className="w-[100px] h-[100px] px-12 md:px-24 bg-[#03C3F8] bg-opacity-10"></TableHead>
            {tableData?.map((tableItem: FlightTableData) => {
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
            })}

            {/* <TableHead className="text-center">
              <p className="flex flex-col gap-3">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="h-14 w-14 flex items-center  mx-auto"
                />
                <span>Gulf Air</span>
              </p>
            </TableHead>
            <TableHead className="text-center">
              <p className="flex flex-col gap-3">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="h-14 w-14 flex items-center  mx-auto"
                />
                <span>Gulf Air</span>
              </p>
            </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className="border">
          {tableData?.map((tableitem) => (
            <TableRow
              key={tableitem.carrierCode}
              className="text-[13px] font-light tracking-wide"
            >
              <TableCell className="font-medium bg-[#03C3F8] bg-opacity-10 px-12 md:px-24 whitespace-nowrap py-4 border-r text-center ">
                {tableitem.stops}
              </TableCell>
              <TableCell className="border-r text-center text-[16px] text-[#1D91CC] whitespace-nowrap">
                {formatCurrency(tableitem.price)}
              </TableCell>
              {/* <TableCell className="border-r text-center text-[16px] text-[#1D91CC] whitespace-nowrap">
                {tableitem.paymentMethod}
              </TableCell>
              <TableCell className="text-center text-[16px] text-[#1D91CC] whitespace-nowrap ">
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
