import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/product/product.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [UserModule,ProductModule, CategoryModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
