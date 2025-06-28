import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateGeneralUserDto, UpdateUserActiveDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserActiveDto) {
    return this.userService.update(+id, updateUserDto);
  }



  @Patch('update-active/:id')
  updateActive(@Param('id') id: string, @Body() updateUserDto: UpdateGeneralUserDto) {
    console.log('Updating user active status:', id, updateUserDto);
    return this.userService.updateUserGeneralData(+id, updateUserDto);
  }





  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
