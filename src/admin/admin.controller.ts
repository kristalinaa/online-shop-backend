import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


  @Get('stats')
  dashbboardStats() {
    return this.adminService.dashboardStats();
  }

  @Get('users/:role')
  getUsers(@Param('role') role: string) {
    return this.adminService.getUsersByRole(role);
  }

  @Get('products')
  getProducts() {
    return this.adminService.getAllProducts();
  }

  @Get('categories')
  getCategoreis() {
    return this.adminService.getAllCategories();
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
