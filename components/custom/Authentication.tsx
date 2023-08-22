'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { useEffect } from 'react';
import { Button } from '../ui/button';

interface AuthenticationProps {
  onSessionUpdated?: (session: Session) => void;
}

export function Authentication({ onSessionUpdated }: AuthenticationProps) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session && onSessionUpdated) {
      onSessionUpdated(session);
    }
  }, [session, onSessionUpdated]);

  const onSignIn = () => {
    signIn('google');
  };

  const onSignOut = () => {
    signOut();
  };

  return status === 'authenticated' ? (
    <Button onClick={onSignOut}>Sign Out</Button>
  ) : (
    <Button onClick={onSignIn}>Sign In</Button>
  );
}
