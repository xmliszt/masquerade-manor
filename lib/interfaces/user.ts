export default interface IUser {
  name: string;
  email: string;
  image?: string | null;
  state: UserState;
  lastLoginAt?: Date;
  lastLogoutAt?: Date;
}
