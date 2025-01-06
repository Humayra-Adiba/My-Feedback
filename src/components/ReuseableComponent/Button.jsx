import { cn } from "../../lib/utils";
export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "bg-black w-[233px], h-[47px], rounded-[23px] text-[#FFFFFF] px-4 py-2 font-roboto hover:transition-all hover:scale-110 hover:bg-slate-500",
        className
      )}
    >
      {children}
    </button>
  );
};
