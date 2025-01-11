import { toast } from "react-toastify";

const ChartFilters = ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}) => {
  const filters = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];
  return (
    <ul className="flex sm:space-x-2 items-center">
      {filters.map((filter, index) => (
        <li
          key={index}
          onClick={() => {
            setActiveFilter(filter);
            toast.info(`Chart data is randomized and not connected to real-time data`);
          }}
          className={`cursor-pointer ${
            activeFilter === filter
              ? "text-[#0141CF] bg-blue-50"
              : "text-gray-500"
          } px-2 text-center max-sm:text-sm rounded-full hover:bg-gray-100`}
        >
          {filter}
        </li>
      ))}
    </ul>
  );
};

export default ChartFilters;
