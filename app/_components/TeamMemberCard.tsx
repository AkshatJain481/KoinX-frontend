import Image from "next/image";

const TeamMemberCard = () => {
  return (
    <div className="mt-8 bg-[#E8F4FD] rounded-lg sm:flex items-center gap-6 py-4 px-8">
      <div className="text-center">
        <Image
          src={"/TeamMember.svg"}
          height={400}
          width={400}
          alt="Team Member"
          className="rounded-lg max-sm:max-w-28 max-sm:max-h-28 max-sm:mx-auto"
        />
        <p className="font-medium mt-2 sm:mt-4">John Smith</p>
        <p className="font-medium text-gray-400 text-xs">Designation here</p>
      </div>
      <p className="sm:text-lg text-sm">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
};

export default TeamMemberCard;
