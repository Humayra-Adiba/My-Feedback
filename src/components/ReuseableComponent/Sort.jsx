import { RxCross2 } from "react-icons/rx";

const SortCard = ({
  handleOpen,
  sortedhightolow,
  sortByRatinglowtohigh,
  defaultSort,
}) => {
  return (
    <div className="bg-white shadow-md p-8 rounded-md border border-[#E6E6E6] relative flex flex-col items-center gap-5 w-fit ms-16">
      <div className="absolute top-2 right-2">
        <button type="button" onClick={handleOpen}>
          <RxCross2 />
        </button>
      </div>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#5D5D5D] "
        onClick={defaultSort}
      >
        All feedbacks
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#5D5D5D] "
        onClick={sortedhightolow}
      >
        Highest rated
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#5D5D5D] "
        onClick={sortByRatinglowtohigh}
      >
        oldest rated
      </button>
    </div>
  );
};

export default SortCard;