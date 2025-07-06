import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { AttachmentService } from 'src/attachment/attachment.service';
import { UserService } from 'src/user/user.service';
import { CategoryService } from 'src/category/category.service';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    private productRepository: ProductRepository,
    private attachmentService: AttachmentService,
    private userService: UserService,
    private categoryService: CategoryService,
    private dataSource: DataSource,
  ) {}
  async create(
    createProductDto: any,
    files: Array<Express.Multer.File>,
    userId: number,
  ): Promise<any> {
    let response: any;
    try {
      console.log('prodcut data', createProductDto.object);
      const object = JSON.parse(createProductDto.object);

      const user = await this.userService.findOne(userId);

      const category = await this.categoryService.findOne(
        Number(object['category']),
      );

      console.log('category ', category);
      const savedFiles =
        await this.attachmentService.saveFilesToLocalPath(files);
      if (savedFiles && savedFiles.length > 0) {
        const product = await this.productRepository.create({
          ...object,
          attachments: savedFiles,
          user: user,
          category: category,
        });
        if (product) {
          return await this.productRepository.save(product);
        }
      }
    } catch (error) {
      console.log('----error in craetiong a product: ', error);

      throw new HttpException(
        'Error in creating product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return response;
  }

  findAllPerCompany(userId: number) {
    return this.productRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: {
        user: true,
        attachments: true,
      },
    });
  }


  findAll() {
    return this.productRepository.find({
      
      relations: {
        user: true,
        attachments: true,
      },
      order: {
        createdAt: 'DESC'
      }
    });
  }

  async countProductsByDayLastMonth(): Promise<any> {
    const query = this.dataSource
      .createQueryBuilder()
      .select('DATE(createdAt)', 'date')
      .addSelect('COUNT(*)', 'count')
      .from('product', 'product')
      .where('createdAt >= CURRENT_DATE - INTERVAL 30 DAY')
      .groupBy('DATE(createdAt)')
      .orderBy('DATE(createdAt)', 'ASC');

    return await query.getRawMany();
  }

  async countAllProducts(): Promise<number> {
    return await this.productRepository.count();
  } 

  async findOne(id: number) {
    return await this.productRepository.findOne({
      select: {
        
        attachments: true,
        category: true,
        user: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        }
      },
      where: { id: id },
      relations: {
        attachments: true,
        category: true,
        user: true,
      },
    });
  }

  async findOneOnlyProduct(id: number) {
    return await this.productRepository.findOne({
      where: { id: id },
    });
  }

  async findProductsPerCategory(category: string) {
    const products = (
      await this.productRepository.getProductsPerCategory(category)
    );
    return products;
  }
  async findProductsPerCategoryFilter(filter: any) {
    if (filter) {
      const category = filter['category'];
      const limit = filter['limit'] ? Number(filter['limit']) : 5;
      console.log('limit ', limit);
      const products = (
        await this.productRepository.getProductsListPerCategory(category,limit)
      );
      return products;
    }
    return [];
  }

  async update(id: number, updateProductDto: any) {
    console.log('-aaaa ', updateProductDto);
    return await this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
