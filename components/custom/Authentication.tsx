'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { useCallback, useEffect } from 'react';
import { Button } from '../ui/button';
import {
  createUserProfile,
  isUserExist,
  updateUserLastLogin,
} from '@/services/userService';
import { useToast } from '../ui/use-toast';

interface AuthenticationProps {
  onSessionUpdated?: (session: Session) => void;
}

export function Authentication({ onSessionUpdated }: AuthenticationProps) {
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const handleUserLogin = useCallback(
    async (name: string, email: string, image?: string) => {
      if (!email) return;
      try {
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
      } catch {
        toast({
          title: 'Oops! Your account is not valid!',
          description:
            "We could not recognise your account. It could be due to missing name or email address >_<'",
          variant: 'destructive',
          duration: 5000,
        });
        signOut();
      }
    },
    [toast]
  );

  useEffect(() => {
    if (session && onSessionUpdated) {
      onSessionUpdated(session);
      if (
        status === 'authenticated' &&
        session.user &&
        session.user.name &&
        session.user.email
      ) {
        handleUserLogin(
          session.user.name,
          session.user.email,
          session.user.image ?? undefined
        );
      }
    }
  }, [status, session, onSessionUpdated, handleUserLogin]);

  const onSignIn = () => {
    signIn();
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
