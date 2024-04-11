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

type Invoice = {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}[];

const TableComponent = () => {
  const invoices: Invoice = [
    {
      invoice: "0 stop",
      paymentStatus: "NGN 3,410,462",
      totalAmount: "NGN 3,410,462",
      paymentMethod: "NGN 3,410,462",
    },
    {
      invoice: "1 stop",
      paymentStatus: "NGN 3,410,462",
      totalAmount: "NGN 3,410,462",
      paymentMethod: "NGN 3,410,462",
    },
    {
      invoice: "2 stop",
      paymentStatus: "NGN 3,410,462",
      totalAmount: "NGN 3,410,462",
      paymentMethod: "NGN 3,410,462",
    },
    {
      invoice: "3 stop",
      paymentStatus: "NGN 3,410,462",
      totalAmount: "NGN 3,410,462",
      paymentMethod: "NGN 3,410,462",
    },
  ];

  return (
    <section className=" max-w-[20rem] min-w-full overflow-x-auto ">
      <Table className=" text-[#606060] min-w-[40rem]">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="border ">
          <TableRow>
            <TableHead className="w-[100px] h-[100px] px-12 md:px-24 bg-[#03C3F8] bg-opacity-10">
              {""}
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
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border">
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              className="text-[13px] font-light tracking-wide"
            >
              <TableCell className="font-medium bg-[#03C3F8] bg-opacity-10 px-12 md:px-24 whitespace-nowrap py-4 border-r text-center ">
                {invoice.invoice}
              </TableCell>
              <TableCell className="border-r text-center text-[16px] text-[#1D91CC] whitespace-nowrap">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="border-r text-center text-[16px] text-[#1D91CC] whitespace-nowrap">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="text-center text-[16px] text-[#1D91CC] whitespace-nowrap ">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TableComponent;
