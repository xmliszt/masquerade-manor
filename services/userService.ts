import { firestore } from '@/lib/firebase';
import IUser from '@/lib/interfaces/user';
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  setDoc,
  updateDoc,
  where,
  query,
} from 'firebase/firestore';

export const createUserProfile = async (user: IUser) => {
  if (!user.email) {
    throw Error('Email is required to create a user!');
  }
  await setDoc(doc(firestore, 'users', user.email), user);
};

export const updateUserState = async (email: string, state: UserState) => {
  await updateDoc(doc(firestore, 'users', email), {
    state,
  });
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

export const getActiveUserCount = async (): Promise<number> => {
  const ref = await getCountFromServer(
    query(collection(firestore, 'users'), where('state', '!=', 'OFFLINE'))
  );
  return ref.data().count;
};
