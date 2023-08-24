import { database } from '@/lib/firebase';
import IRoom from '@/lib/interfaces/room';
import { onValue, ref, set, update } from 'firebase/database';
import { useEffect, useState } from 'react';

export const useRooms = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    const roomRef = ref(database, 'rooms/');
    onValue(roomRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      const rooms = Object.values(data) as IRoom[] | null | undefined;
      if (rooms) {
        setRooms(rooms);
      }
    });
  }, []);

  const addRoom = async (room: IRoom) => {
    const addRef = ref(database, 'rooms/' + room._id);
    set(addRef, room);
  };

  const updateRoomStatus = async (
    roomID: string,
    status: 'open' | 'in_game'
  ) => {
    const updateRef = ref(database, 'rooms/' + roomID);
    update(updateRef, { status });
  };

  return { rooms, addRoom, updateRoomStatus };
};
