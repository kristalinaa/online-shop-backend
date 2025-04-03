import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, UploadedFiles, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HasRoles } from 'src/role/roles.decorator';
import { ROLE } from 'src/role/role.enum';
import { FilesInterceptor } from '@nestjs/platform-express';
import { IGetUserAuthInfoRequest } from 'src/common/interceptor/test';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @UseGuards(JwtAuthGuard)
  @HasRoles(ROLE.COMPANY)
  @Post()
  @UseInterceptors(FilesInterceptor('files',null))
  create(@Body() object: any, @UploadedFiles() files: Array<Express.Multer.File>,@Req() req: IGetUserAuthInfoRequest ) {

    let user = req.user as any;
    return this.productService.create(object,files, user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @HasRoles(ROLE.COMPANY)
  @Get()
  findAllPerCompany(
    @Req() req: IGetUserAuthInfoRequest 
  ) {
    let user = req.user as any;

    return this.productService.findAllPerCompany(user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
