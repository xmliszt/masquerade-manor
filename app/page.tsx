'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Authentication } from '@/components/custom/Authentication';
import { RoomTable } from '@/components/custom/RoomTable';
import { ThemeToggle } from '@/components/custom/ThemeToggle';
import { Session } from 'next-auth';
import { useState } from 'react';

export default function Home() {
  const [userSession, setUserSession] = useState<Session>();

  const user = userSession?.user;

  return (
    <main className='relative w-full h-screen flex justify-center items-center'>
      {user && (
        <div className='absolute top-4 flex flex-col gap-4 justify-start items-center w-full'>
          {user.image && (
            <Avatar className='w-20 h-20 drop-shadow-lg'>
              <AvatarImage referrerPolicy='no-referrer' src={user.image} />
              <AvatarFallback>Profile Image</AvatarFallback>
            </Avatar>
          )}
          <h1 className='text-3xl font-extrabold'>Hello! {user.name}</h1>
          <h1 className='text-3xl font-extrabold'>{user.email}</h1>
        </div>
      )}
      <div className='absolute top-4 right-2 flex flex-row gap-2'>
        <ThemeToggle />
        <Authentication
          onSessionUpdated={(session) => {
            setUserSession(session);
          }}
        />
      </div>
      <div className='w-4/5 h-3/5'>
        <RoomTable />
      </div>
    </main>
  );
}
