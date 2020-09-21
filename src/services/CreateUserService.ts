import User from "../entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

export default class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  public async execute(name: string, email: string, password: string): Promise<User> {
    const findUser = await this.usersRepository.findByEmail(email);

    if(findUser){
      throw new Error('E-mail already registered.')
    }

    const user = await this.usersRepository.create(name, email, password)

    return user
  }
}