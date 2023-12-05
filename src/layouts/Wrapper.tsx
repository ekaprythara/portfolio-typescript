import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="px-5 md:px-10 lg:px-15 xl:px-20">{children}</div>;
};

export default Wrapper;
