import {
  BadGatewayException,
  BadRequestException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRoleService } from 'src/user-role/user-role.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private userRoleService: UserRoleService,
  ) {}

  async registerUser(createUserDto: CreateUserDto): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOneByEmail(createUserDto.email);

      if (user) {
        throw new BadRequestException('User is actually registered');
      }

      //else do register the user with hashed password
      const saltOrRounds = 10;
      const password = createUserDto.password;
      const hashedPassword = await bcrypt.hash(password, saltOrRounds);

      const registeredUser = await this.userService.registerUser({
        ...createUserDto,
        password: hashedPassword,
      });

      if (registeredUser) {
        await this.userRoleService.setUsertRole(
          registeredUser,
          createUserDto.type,
        );
        response = this.login({
          email: createUserDto.email,
          password: createUserDto.password,
        });
      }
    } catch (error) {
      console.log('Error when registering user', error);
      throw new BadRequestException('Internal server error');
    }
    return response;
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
    let response;

    let errorMessage: string;
    try {
      //check if register, email exist
      const user = await this.userService.findOneByEmail(loginUserDto.email);

      if (!user) {
        throw new BadRequestException(
          'We cant find this user, please register',
        );
      }

      //if found, check for password, check if password match
      const hasshedPassword = user.password;
      const isMatch = await bcrypt.compare(
        loginUserDto.password,
        hasshedPassword,
      );

      if (!isMatch) {
        errorMessage = 'Wrong credentials';
        throw new BadRequestException('Wrong credentials');
      }

      const payload = { sub: user.id, email: user.email, roles: user.userRoles.map(it=> it.role.role) };
      const access_token = await this.jwtService.signAsync(payload);

      const userRoles = user.userRoles.map( (it: any) => it.role.role)
      response = {
        email: user.email,
        token: access_token,
        roles: userRoles
      };
    } catch (error) {
      console.log('Error in login for user', error);
      throw new BadGatewayException(
        errorMessage ? errorMessage : 'Internal server errro',
        HttpStatus.FORBIDDEN.toString(),
      );
    }
    return response;
  }

  verifyToken(token: string): any {
    try {
      const decoded = this.jwtService.verify(token); // Replace 'your-secret-key' with your actual secret key

      return decoded;
    } catch (err) {
      throw new Error('Invalid token');
    }
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
