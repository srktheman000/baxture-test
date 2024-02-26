'use client';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import { User } from '@/type/userTypes';
import { SimpleGrid, Text } from '@mantine/core';
import { useState } from 'react';

interface ProfileCardList {
  userList: User[];
}

export default function ProfileCardList({ userList }: ProfileCardList) {
  const [profileUserList, setProfileUserList] = useState(userList);

  const deleteUser = (id: number) => {
    const updatedUsetList = profileUserList.filter((user) => user.id !== id);
    setProfileUserList(updatedUsetList);
  };

  return (
    <>
      {profileUserList && profileUserList.length > 0 ? (
        <SimpleGrid cols={4}>
          {profileUserList.map((user) => (
            <ProfileCard key={user.id} user={user} deleteUser={deleteUser} />
          ))}
        </SimpleGrid>
      ) : (
        <Text>No data</Text>
      )}
    </>
  );
}
