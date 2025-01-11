import { JSX } from "react";

const SentimentCards = ({
  icon,
  BgColor,
  BgColorIcon,
}: {
  icon: JSX.Element;
  BgColor: string;
  BgColorIcon: string;
}) => {
  return (
    <div
      className={`rounded-xl p-6 flex space-x-4 min-w-80 md:min-w-[500px]`}
      style={{ backgroundColor: BgColor }}
    >
      <div>
        <div
          className={`rounded-full p-2 md:p-4`}
          style={{ backgroundColor: BgColorIcon }}
        >
          {icon}
        </div>
      </div>
      <div>
        <p className="font-medium text-xs md:text-lg pr-4">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </p>
        <br />
        <p className="text-gray-600 text-xs md:text-base pr-4">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </div>
  );
};

export default SentimentCards;
