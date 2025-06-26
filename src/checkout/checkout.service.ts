
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';
import { CheckoutRepository } from './checkout.repository';
import { UserService } from 'src/user/user.service';
import { BankAccountRepository } from 'src/bank-account/bank-account.repository';
import { ProductService } from 'src/product/product.service';
import { SoldService } from 'src/sold/sold.service';
import { BankAccount } from 'src/bank-account/entities/bank-account.entity';
import { Sold } from 'src/sold/entities/sold.entity';
import { Checkout } from './entities/checkout.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class CheckoutService {

  constructor(
    private readonly dataSource: DataSource,
    private checkoutRepository: CheckoutRepository,
    private userService: UserService,
    private bankAccountRepository: BankAccountRepository,
    private productService: ProductService,
    private soldService: SoldService
  ){

  }
  async create(createCheckoutDto: any, userId: number): Promise<any> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
  
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new HttpException("User doing checkout is not found", HttpStatus.NOT_FOUND);
      }
  
      const card = await queryRunner.manager.findOne(BankAccount, {
        where: { id: createCheckoutDto.metadata.cardId },
      });
  
      if (!card) {
        throw new HttpException("Card not found", HttpStatus.NOT_FOUND);
      }
  
      if (parseFloat(card.total) < parseFloat(createCheckoutDto.metadata.total)) {
        throw new HttpException("You don't have enough money", HttpStatus.BAD_REQUEST);
      }
  
      // Save Checkout
      const createdCheckout = await queryRunner.manager.save(Checkout, {
        ...createCheckoutDto.metadata,
        user: user,
        bankAccount: card,
      });
  
      // Create Sold Items
      const soldItems = createCheckoutDto.items;
  
      for (const element of soldItems) {
        const product = await this.productService.findOne(element.product.id);
        if (!product) throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
  
        const sold = queryRunner.manager.create(Sold, {
          product,
          quantity: element.quantity,
          priceAtSale: product.price,
          checkout: createdCheckout,
        });
  
        await queryRunner.manager.save(Sold, sold);
      }
  
      // Update card balance
      const newTotal = parseFloat(card.total) - parseFloat(createCheckoutDto.metadata.total);
      card.total = newTotal.toString();
  
      await queryRunner.manager.save(BankAccount, card);
  
      // ✅ Commit transaction
      await queryRunner.commitTransaction();
  
      return createdCheckout;
  
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error("❌ Transaction rolled back:", error);
      throw new HttpException("Error in creating checkout", HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await queryRunner.release();
    }
  }



  async findAll(userId: number): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if(!user){
        throw new HttpException("User doing checkout is not found ", HttpStatus.NOT_FOUND)

      }

      const checkoutList = await this.checkoutRepository.find({
        where: {
          user: {
            id: userId
          }
        },
        relations: {
          user: true,
          soldItems: true
        }
      })

      response = checkoutList;
    } catch (error) {
      console.log("-error in getting checkout ", error);
      throw new HttpException("Error in getting checkout ", HttpStatus.INTERNAL_SERVER_ERROR)
    }
    return response;
  }


  async findAllPerCompany(userId: number): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if(!user){
        throw new HttpException("User doing checkout is not found ", HttpStatus.NOT_FOUND)

      }

      const checkoutList = await this.checkoutRepository.find({
        where: {
          soldItems: {
            product: {
              user: {
                id: userId
              }
            }
          }
        },
        relations: {
          user: true,
          soldItems: {
            product: {
              attachments: true
            }
          }
        }
      })

      response = checkoutList;
    } catch (error) {
      console.log("-error in getting checkout ", error);
      throw new HttpException("Error in getting checkout ", HttpStatus.INTERNAL_SERVER_ERROR)
    }
    return response;
  }


  async findSingle(userId: number, checkoutId: number): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if(!user){
        throw new HttpException("User doing checkout is not found ", HttpStatus.NOT_FOUND)

      }

      const checkoutList = await this.checkoutRepository.find({
        where: {
          user: {
            id: userId
          },
          id: +checkoutId
        },
        relations: {
          user: true,
          soldItems: {
            product: {
              attachments: true
            }
          },

        }
      })

      response = checkoutList;
    } catch (error) {
      console.log("-error in getting checkout ", error);
      throw new HttpException("Error in getting checkout ", HttpStatus.INTERNAL_SERVER_ERROR)
    }
    return response;
  }


  async findSinglePerCompany(userId: number, checkoutId: number): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if(!user){
        throw new HttpException("User doing checkout is not found ", HttpStatus.NOT_FOUND)

      }

      const checkoutList = await this.checkoutRepository.find({
        where: {
          soldItems: {
            product: {
              user: {
                id: userId
              }
            }
            
          },
          id: checkoutId

        },
        relations: {
          user: true,
          soldItems: true
        }
      })

      response = checkoutList;
    } catch (error) {
      console.log("-error in getting checkout ", error);
      throw new HttpException("Error in getting checkout ", HttpStatus.INTERNAL_SERVER_ERROR)
    }
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkout`;
  }

  update(id: number, updateCheckoutDto: UpdateCheckoutDto) {
    return `This action updates a #${id} checkout`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkout`;
  }
}
