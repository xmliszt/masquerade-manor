export default interface IRoom {
  _id: string;
  name: string;
  createdBy: string; // User
  createdAt: string;
  status: 'open' | 'in_game';
  capacity: number;
  playersCount: number;
  visibility: 'public' | 'private';
}
