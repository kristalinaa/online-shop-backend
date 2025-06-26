import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountRepository } from './bank-account.repository';
import { UserService } from 'src/user/user.service';
import { CheckoutRepository } from 'src/checkout/checkout.repository';

@Injectable()
export class BankAccountService {
  constructor(
    private bankAccounRepository: BankAccountRepository,
    private userService: UserService,
    private checkoutRepository: CheckoutRepository
    
  ) {}
  async create(createBankAccountDto: any, userId: number): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new HttpException(
          'User adding card is not found ',
          HttpStatus.NOT_FOUND,
        );
      }

      const createdBank = await this.bankAccounRepository.save({
        ...createBankAccountDto,
        user: user,
      });

      response = createdBank;
    } catch (error) {
      console.log('-error in creating card ', error);
      throw new HttpException(
        'Error in creating card ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return response;
  }

  async findAll(userId: number): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new HttpException('User not found ', HttpStatus.NOT_FOUND);
      }

      const banks = await this.bankAccounRepository.find({
        where: {
          user: {
            id: userId,
          },
        },
        relations: {
          user: true,
        },
      });

      response = banks;
    } catch (error) {
      console.log('-error in getting card ', error);
      throw new HttpException(
        'Error in getting card ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return response;
  }

  async findOne(cardId: number, userId: number): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new HttpException('User not found ', HttpStatus.NOT_FOUND);
      }

      const banks = await this.bankAccounRepository.find({
        where: {
          user: {
            id: userId,
          },
          id: cardId,
        },
        relations: {
          user: true,
        },
      });

      response = banks;
    } catch (error) {
      console.log('-error in getting single card ', error);
      throw new HttpException(
        'Error in getting single card ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return response;
  }

  async getHistoryPerCard(cardId: number, userId: number): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new HttpException('User not found ', HttpStatus.NOT_FOUND);
      }

      const checkouts = await this.checkoutRepository.find({
        where: {
          bankAccount: {
            id: cardId,
          },
        },
        relations: {
          bankAccount: true
        },
      });

      response = checkouts;
    } catch (error) {
      console.log('-error in getting single card ', error);
      throw new HttpException(
        'Error in getting single card ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return response;
  }

  async update(
    id: number,
    updateBankAccountDto: any,
    userId: number,
  ): Promise<any> {
    let response: any;
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        throw new HttpException('User not found ', HttpStatus.NOT_FOUND);
      }

      const banks = await this.bankAccounRepository.update(
        id,
        updateBankAccountDto,
      );

      const updatedBanks = await this.bankAccounRepository.find({
        where: {
          user: {
            id: userId,
          },
          id: id,
        },
        relations: {
          user: true,
        },
      });
      response = updatedBanks;
    } catch (error) {
      console.log('-error in updating single card ', error);
      throw new HttpException(
        'Error in updating single card ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return response;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
