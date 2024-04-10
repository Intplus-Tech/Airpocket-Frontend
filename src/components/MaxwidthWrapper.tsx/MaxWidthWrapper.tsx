import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MaxwidthWrapper = ({ children }: Props) => {
  return <main className="max-w-screen-2xl mx-auto px-4">{children}</main>;
};

export default MaxwidthWrapper;
