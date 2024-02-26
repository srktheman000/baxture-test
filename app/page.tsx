import ProfileCardList from '@/components/ProfileCard/ProfileCardList';
import getUserList from '@/lib/getUserList';
import { Box } from '@mantine/core';

export default async function HomePage() {
  let userList = [];

  try {
    userList = await getUserList();
  } catch (error) {
    return (
      <Box p={'8'}>
        <div>Error fetching user data!</div>
      </Box>
    );
  }
  return (
    <>
      <Box p={'8'}>
        <ProfileCardList userList={userList} />
      </Box>
    </>
  );
}
