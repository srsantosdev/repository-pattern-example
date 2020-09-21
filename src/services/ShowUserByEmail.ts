import User from "../entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

export default class ShowUserByEmail {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  public async execute(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findByEmail(email)

    return user;
  }
}