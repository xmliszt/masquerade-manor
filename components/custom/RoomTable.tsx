'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRooms } from '@/hooks/roomHook';
import { Button } from '../ui/button';
import moment from 'moment';

export function RoomTable() {
  const { rooms, addRoom, updateRoomStatus } = useRooms();

  const onAddRoom = () => {
    addRoom({
      _id: String(new Date().getTime()),
      name: 'Hello World',
      createdBy: 'Me',
      createdAt: new Date(),
      status: 'open',
      capacity: 10,
      playersCount: 2,
      visibility: 'public',
    });
  };

  const onUpdateRoom = (roomID: string, currentStatus: 'open' | 'in_game') => {
    updateRoomStatus(roomID, currentStatus === 'open' ? 'in_game' : 'open');
  };

  return (
    <>
      <Button className='mb-4' onClick={onAddRoom}>
        Add Room
      </Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Room Name</TableHead>
            <TableHead>Room Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room._id}>
              <TableCell width='120px'>{room.name}</TableCell>
              <TableCell>{`${room.status} [${room.playersCount}/${room.capacity}]`}</TableCell>
              <TableCell>
                {moment(room.createdAt).format('Do MMM yyyy HH:mm:ss')}
              </TableCell>
              <TableCell className='text-right'>
                <Button
                  onClick={() => {
                    onUpdateRoom(room._id, room.status);
                  }}
                >
                  Join
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
