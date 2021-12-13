import { ICreateUserDto } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
}

export { IUsersRepository };
