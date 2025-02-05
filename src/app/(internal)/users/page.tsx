import { Page } from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UsersList from "@/app/components/user/UsersList";
import { IconUser } from "@tabler/icons-react";

export default function Users() {
 return (
  <Page className="flex flex-col gap-10">
   <Title icon={IconUser} primary="Users" secondary="User registration" />
   <UsersList />
  </Page>
 );
}
