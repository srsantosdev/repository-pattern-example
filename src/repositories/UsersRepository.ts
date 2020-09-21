import User from "../entities/User";
import IUsersRepository from "./IUsersRepository";

export default class UsersRepository implements IUsersRepository {
  private users: User[] = []

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async create(name: string, email: string, password: string): Promise<User> {
    const user = new User(name, email, password)

    this.users.push(user)

    return user;
  }
}