export default interface IUser {
  name: string;
  image?: string;
  email?: string;
  lastLoginAt?: Date;
  lastLogoutAt?: Date;
}
