import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="w-11/12 lg:w-9/12 mx-auto">{children}</div>;
};

export default Wrapper;
