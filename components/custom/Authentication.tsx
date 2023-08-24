'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { useCallback, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import {
  createUserProfile,
  isUserExist,
  updateUserLastLogin,
  updateUserLastLogout,
} from '@/services/userService';
import { useToast } from '../ui/use-toast';

interface AuthenticationProps {
  onSessionUpdated?: (session: Session) => void;
}

export function Authentication({ onSessionUpdated }: AuthenticationProps) {
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const userSessionStatus = useRef<string>();

  const handleAfterUserLogin = useCallback(
    async (name: string, email: string, image?: string | null) => {
      if (await isUserExist(email)) {
        await updateUserLastLogin(email, new Date());
      } else {
        await createUserProfile({
          name,
          email,
          image,
          lastLoginAt: new Date(),
        });
      }
    },
    []
  );

  useEffect(() => {
    if (session && onSessionUpdated && status !== userSessionStatus.current) {
      userSessionStatus.current = status;
      onSessionUpdated(session);
      if (
        status === 'authenticated' &&
        session.user &&
        session.user.name &&
        session.user.email
      ) {
        handleAfterUserLogin(
          session.user.name,
          session.user.email,
          session.user.image ?? undefined
        );
        toast({
          title: 'Signed in successfully!',
          duration: 1000,
        });
      }
    }
  }, [status, onSessionUpdated, session, handleAfterUserLogin, toast]);

  const onSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      toast({
        title: 'Failed to sign in',
        description: 'Something went wrong!',
        variant: 'destructive',
        duration: 3000,
      });
      console.error(error);
    }
  };

  const onSignOut = async () => {
    try {
      await signOut();
      session?.user?.email &&
        (await updateUserLastLogout(session.user.email, new Date()));
    } catch (error) {
      console.error(error);
    }
  };

  return status === 'authenticated' ? (
    <Button onClick={onSignOut}>Sign Out</Button>
  ) : (
    <Button onClick={onSignIn}>Sign In</Button>
  );
}
