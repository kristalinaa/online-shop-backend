import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserActiveDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async registerUser(createUserDto: CreateUserDto): Promise<any> {
    let response: any;
    try {
      const createdUser = this.usersRepository.create(createUserDto);
      if (createdUser) {
        const savedUser = this.usersRepository.save(createdUser);

        if (savedUser) {
          response = savedUser;
        } else {
          throw new BadGatewayException('Could not save user');
        }
      } else {
        throw new BadGatewayException('Could not create user');
      }
    } catch (error) {
      throw new BadGatewayException('Internal server error');
    }

    return response;
  }

  findAll() {
    return this.usersRepository.find({
      relations: {
        userRoles: {
          role: true
        }
      }
    });
  }


  
  findAllCompanies() {
    return this.usersRepository.find({
      where: {
        userRoles: {
          role: {
            role: 'company'
          }
        }
      },
      relations: {
        userRoles: {
          role: true
        }
      }
    });
  }

  findAllClients() {
    return this.usersRepository.find({
      where: {
        userRoles: {
          role: {
            role: 'person'
          }
        }
      },
      relations: {
        userRoles: {
          role: true
        }
      }
    });
  }
  findOne(id: number) {
    return this.usersRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        bankAccounts: true,
      },
    });
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOne({
      where: {
        email: email,
      },
      relations: {
        userRoles: {
          role: true
        }
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserActiveDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
