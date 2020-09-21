import User from "../entities/User";

export default interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(name: string, email: string, password: string): Promise<User>;
}