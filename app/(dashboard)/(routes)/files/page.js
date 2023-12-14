import { UserButton } from "@clerk/nextjs";

const Files = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Files;
