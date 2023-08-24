import { firestore } from '@/lib/firebase';
import IUser from '@/lib/interfaces/user';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export const createUserProfile = async (user: IUser) => {
  if (!user.email) {
    throw Error('Email is required to create a user!');
  }
  await setDoc(doc(firestore, 'users', user.email), user);
};

export const updateUserLastLogin = async (email: string, lastLoginAt: Date) => {
  await updateDoc(doc(firestore, 'users', email), {
    lastLoginAt,
  });
};

export const updateUserLastLogout = async (
  email: string,
  lastLogoutAt: Date
) => {
  await updateDoc(doc(firestore, 'users', email), {
    lastLogoutAt,
  });
};

export const isUserExist = async (email: string): Promise<boolean> => {
  const ref = await getDoc(doc(firestore, 'users', email));
  return ref.exists();
};
