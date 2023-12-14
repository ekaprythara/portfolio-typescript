type ButtonProps = {
  title: string;
  onClick?: () => void;
};

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-primary font-poppins rounded-lg px-6 py-3 text-sm lg:text-base w-fit hover:opacity-70 text-color-primary duration-300"
      type="submit"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
