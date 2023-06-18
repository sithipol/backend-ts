export interface User {
  id: number;
  first_name: string;
  last_name: string;
  gender: number;
  birthday: Date;
  image: string;
}
// export interface UserData {
//   id: number;
//   first_name: string;
//   last_name: string;
//   gender: number;
//   birthday: Date;
//   image: string;
// }

export interface UserServiceType {
  getUsers(): Promise<User[]>;
  getUser(id: string): Promise<User[]> | undefined;
  createUser(user: User): User;
  // updateUser(id: number, user: User): User | undefined;
  // deleteUser(id: number): boolean;
}
