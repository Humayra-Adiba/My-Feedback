import { cn } from "../../lib/utils";
const Card = ({
  items,
  className,
  imageClass,
  titleClass,
  desClass,
  onClick,
}) => {
  return (
    <>
      <div
        className={cn("flex flex-col gap-3 rounded-xl", className)}
        onClick={onClick}
      >
        <img
          src={items.image}
          alt=""
          className={cn("w-[285px] h-[213px]", imageClass)}
        />
        <div className="space-y-2">
          <h1
            className={cn(
              "font-semibold font-roboto text-[19px] text-EerieBlack leading-5",
              titleClass
            )}
          >
            {items.title}
          </h1>
          <p
            className={cn(
              "text-[#8F8F8F] font-roboto text-sm leading-4 w-[80%]",
              desClass
            )}
          >
            {items.des}
          </p>
          <div className="flex justify-start items-center gap-3">
            {Array.from(Array(items.star).keys()).map((el) => (
              <img src="/star.png" alt="" key={el} />
            ))}
            <div className="flex">
              <p className={cn("font-roboto font-semibold text-sm leading-4 ")}>
                {items.rating}
              </p>
              <p
                className={cn(
                  "font-roboto font-semibold text-sm leading-4 text-[#7A7A7A]"
                )}
              >
                {items.totalReviews}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;