import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UserService } from 'src/user/user.service';
import { ProductService } from 'src/product/product.service';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class AdminService {

  constructor(private userService: UserService, private productService: ProductService, private categoryService: CategoryService){

  }


  dashboardStats(): Promise<any> {
    return Promise.all([
      this.userService.findAll(),
      this.userService.findAllCompanies(),
      this.userService.findAllClients(),
      this.productService.countProductsByDayLastMonth(),
      this.productService.countAllProducts(),
      this.categoryService.countAllCategories()
    ])
    .then(([users, companies, clients, monthlyProductCount,countProducts, countCategories]) => {
      return {
        counts: {
          users: users.length,
          companies: companies.length,
          clients: clients.length,
          products: countProducts,
          categories: countCategories
        },
        monthlyProductCount: monthlyProductCount
      };
    })
    .catch(error => {
      console.log("---error ", error)
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  async getUsersByRole(role?: string){
    if(role == 'all') return await this.userService.findAll()

    if(role == 'company') return await this.userService.findAllCompanies()
    if(role == 'person') return await this.userService.findAllClients()
   }


   async getAllProducts(){
    return await this.productService.findAll()
   }

   async getAllCategories(){
    return await this.categoryService.findAll()
   }
   

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
