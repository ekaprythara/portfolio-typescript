import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="overflow-hidden bg-light text-black dark:bg-darker dark:text-white transition-all duration-300">
      {children}
    </div>
  );
};

export default Container;
