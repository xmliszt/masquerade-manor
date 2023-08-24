export default interface IRoom {
  _id: string;
  name: string;
  createdBy: string; // User
  createdAt: string;
  status: RoomState;
  capacity: number;
  playersCount: number;
  visibility: 'public' | 'private';
}
