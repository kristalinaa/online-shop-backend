import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { AttachmentModule } from 'src/attachment/attachment.module';
import { UserModule } from 'src/user/user.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), AttachmentModule, UserModule, CategoryModule],
  controllers: [ProductController],
  providers: [ProductService,ProductRepository],
})
export class ProductModule {}
