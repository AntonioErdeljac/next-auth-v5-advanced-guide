import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

export const metadata = {
  title: "Server",
};

const ServerPage = async () => {
  const user = await currentUser();

  return <UserInfo label="💻 Server component" user={user} />;
};

export default ServerPage;
