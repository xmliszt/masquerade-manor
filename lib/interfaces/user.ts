export default interface IUser {
  name: string;
  image?: string | null;
  email?: string;
  lastLoginAt?: Date;
  lastLogoutAt?: Date;
}
