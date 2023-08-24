'use client';

import { getActiveUserCount } from '@/services/userService';
import { PersonIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';

export function UserCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    refresh();
    let interval = setInterval(() => {
      refresh();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const refresh = async () => {
    try {
      const count = await getActiveUserCount();
      setCount(count);
    } catch (error) {
      // suppress
    }
  };

  return (
    <div className='flex flex-row gap-1 items-center'>
      <PersonIcon />
      <span className='text-xs'>{`${count} active players`}</span>
    </div>
  );
}
