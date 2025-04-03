import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { AttachmentService } from 'src/attachment/attachment.service';
import { UserService } from 'src/user/user.service';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductService {

  constructor(
    private productRepository: ProductRepository,
    private attachmentService: AttachmentService,
    private userService: UserService,
    private categoryService: CategoryService
  ){

  }
  async create(createProductDto: any, files: Array<Express.Multer.File>, userId: number): Promise<any> {
    let response: any;
    try {
      console.log("prodcut data", createProductDto.object)
      const object = JSON.parse(createProductDto.object)

    

      const user = await this.userService.findOne(userId)

      const category = await this.categoryService.findOne(Number(object['category']))

      console.log("category ", category)
      const savedFiles = await this.attachmentService.saveFilesToLocalPath(files)
      if(savedFiles && savedFiles.length > 0){
        const product = await this.productRepository.create({...object, attachments: savedFiles, user: user,category: category});
        if(product){
          return await this.productRepository.save(product)
        }
      }
     
    } catch (error) {
      console.log("----error in craetiong a product: ",error)

      throw new HttpException("Error in creating product", HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return response
  }

  findAllPerCompany(userId: number) {
    return this.productRepository.find({
      where: {
        user: {
          id: userId
        }
      },
      relations: {
        user: true,
        attachments: true
      }
    });
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where: {id:id

      },
      relations: {
        attachments: true,
        category: true
      }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
