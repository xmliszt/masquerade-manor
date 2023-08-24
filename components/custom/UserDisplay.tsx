'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserDisplayProps {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export function UserDisplay({ user }: UserDisplayProps) {
  return (
    <div className='my-4 flex flex-col gap-4 justify-start items-center w-full'>
      {user.image && (
        <Avatar className='w-20 h-20 drop-shadow-lg'>
          <AvatarImage referrerPolicy='no-referrer' src={user.image} />
          <AvatarFallback>Profile Image</AvatarFallback>
        </Avatar>
      )}
      <h1 className='text-2xl leading-4 font-extrabold'>Hello! {user.name}</h1>
      <h1 className='text-base italic'>{user.email}</h1>
    </div>
  );
}
