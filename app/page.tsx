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
    <main className='relative w-full h-screen flex flex-col gap-2 items-center'>
      <div className='fixed top-4 right-2 flex flex-row gap-2'>
        <ThemeToggle />
        <Authentication
          onSessionUpdated={(session) => {
            setUserSession(session);
          }}
        />
      </div>
      {user && (
        <div className='my-4 flex flex-col gap-4 justify-start items-center w-full'>
          {user.image && (
            <Avatar className='w-20 h-20 drop-shadow-lg'>
              <AvatarImage referrerPolicy='no-referrer' src={user.image} />
              <AvatarFallback>Profile Image</AvatarFallback>
            </Avatar>
          )}
          <h1 className='text-2xl leading-4 font-extrabold'>
            Hello! {user.name}
          </h1>
          <h1 className='text-base italic'>{user.email}</h1>
        </div>
      )}
      <div className='px-4 w-full'>
        <RoomTable />
      </div>
    </main>
  );
}
