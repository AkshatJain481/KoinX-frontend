import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <div className="bg-white p-6 rounded-lg mt-6">
      <h2 className="font-semibold text-2xl">Team</h2>
      <p className="mt-6 text-gray-800 font-medium">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
    </div>
  );
};

export default Team;
