'use client';
import { User } from '@/type/userTypes';
import { Card, Image, Text, Badge, Button, Group, Avatar, Flex, Box } from '@mantine/core';
import {
  IconUserPlus,
  IconTrash,
  IconUsersMinus,
  IconStar,
  IconPhoneCall,
  IconWorld,
  IconAt,
} from '@tabler/icons-react';
import { useState } from 'react';

function getInitialLetter(name: string) {
  return name.charAt(0).toUpperCase();
}

interface IProfileCard {
  user: User;
  deleteUser: (c: number) => void;
}

function ProfileCard({ user, deleteUser }: IProfileCard) {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder m={'sm'}>
      <Flex direction={'column'} align={'center'} justify={'center'}>
        <Avatar
          size={'7rem'}
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
          alt="no image here"
        />
      </Flex>
      <Flex align="center" display={'flex'} justify={'center'} gap="sm">
        <Text mt="sm" size="lg" fw={600} mx={'8'}>
          {user.name}
        </Text>
        {isFollowing && <IconStar size={'16'} stroke={'2'} />}{' '}
      </Flex>

      <Flex direction={'column'} align={'flex-start'} gap={'sm'} my={'8'}>
        <Flex align="center" gap="sm">
          <IconAt size={'16'} color="gray" stroke={'2'} />
          <Text size="sm" c="dimmed">
            {user.email}
          </Text>
        </Flex>
        <Flex align="center" gap="sm">
          <IconPhoneCall size={'16'} color="gray" stroke={'2'} />
          <Text size="sm" c="dimmed">
            {user.phone}
          </Text>
        </Flex>
        <Flex align="center" gap="sm">
          <IconWorld size={'16'} color="gray" stroke={'2'} />
          <Text size="sm" c="dimmed">
            {user.website}
          </Text>
        </Flex>
      </Flex>

      <Flex display={'flex'} justify={'space-around'} gap={'md'}>
        <Button
          variant={isFollowing ? 'default' : 'filled'}
          fullWidth
          mt="md"
          radius="sm"
          onClick={handleFollowToggle}
        >
          {isFollowing ? (
            <>
              <IconUsersMinus size={16} />
              <Text ml={'8'}>Unfollow</Text>
            </>
          ) : (
            <>
              <IconUserPlus size={16} />
              <Text ml={'8'}>Follow</Text>
            </>
          )}
        </Button>
        <Button
          color="blue"
          fullWidth
          mt="md"
          radius="sm"
          variant="outline"
          onClick={() => deleteUser(user.id)}
        >
          <IconTrash size={16} />
          <Text ml={8}>Delete</Text>
        </Button>
      </Flex>
    </Card>
  );
}

export default ProfileCard;
