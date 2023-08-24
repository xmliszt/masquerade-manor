'use client';

import { Authentication } from '@/components/custom/Authentication';
import { RoomTable } from '@/components/custom/RoomTable';
import { ThemeToggle } from '@/components/custom/ThemeToggle';
import { UserCounter } from '@/components/custom/UserCounter';
import { UserDisplay } from '@/components/custom/UserDisplay';
import { Session } from 'next-auth';
import { useState } from 'react';

export default function Home() {
  const [userSession, setUserSession] = useState<Session>();

  const user = userSession?.user;

  return (
    <main className='relative w-full h-screen flex flex-col gap-2 items-center'>
      <div className='fixed top-4 left-2'>
        <UserCounter />
      </div>
      <div className='fixed top-4 right-2 flex flex-row gap-2'>
        <ThemeToggle />
        <Authentication
          onSessionUpdated={(session) => {
            setUserSession(session);
          }}
        />
      </div>
      {user ? (
        <UserDisplay user={user} />
      ) : (
        <h1 className='text-5xl my-10 font-extrabold'>
          Welcome To Masquerade Manor
        </h1>
      )}
      <div className='px-4 w-full'>
        <RoomTable />
      </div>
    </main>
  );
}
