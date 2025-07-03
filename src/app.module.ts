import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { BankAccountModule } from './bank-account/bank-account.module';
import { UserModule } from './user/user.module';
import { BankAccount } from './bank-account/entities/bank-account.entity';
import { AuthModule } from './auth/auth.module';
import { Role } from './role/entities/role.entity';
import { UserRole } from './user-role/entities/user-role.entity';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user-role/user-role.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { AttachmentModule } from './attachment/attachment.module';
import { Attachment } from './attachment/entities/attachment.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { BagModule } from './bag/bag.module';
import { Bag } from './bag/entities/bag.entity';
import { CheckoutModule } from './checkout/checkout.module';
import { Checkout } from './checkout/entities/checkout.entity';
import { SoldModule } from './sold/sold.module';
import { Sold } from './sold/entities/sold.entity';
import { AdminModule } from './admin/admin.module';
import { NotificationModule } from './notification/notification.module';
import { Notification } from './notification/entities/notification.entity';
import { ChatMessageModule } from './chat-message/chat-message.module';
import { ChatMessage } from './chat-message/entities/chat-message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '19990707@10AMiwasborn',
      database: 'online-shop',
      entities: [User, BankAccount, Role, UserRole, Product, Attachment,Category, Bag,Checkout,Sold,Notification, ChatMessage],
      synchronize: true,
    }),
    UserModule,
    BankAccountModule,
    RoleModule,
    UserRoleModule,
    AuthModule,
    ProductModule,
    AttachmentModule,
    CategoryModule,
    BagModule,
    CheckoutModule,
    SoldModule,
    AdminModule,
    NotificationModule,
    ChatMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
