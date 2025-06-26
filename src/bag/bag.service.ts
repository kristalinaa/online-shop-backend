import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BagRepository } from './bag.repository';
import { UserService } from 'src/user/user.service';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class BagService {

  constructor(
    private bagRepository: BagRepository,
    private userService: UserService,
    private productService: ProductService
  ) {

  }
  async create(createBagDto: any, userId: number): Promise<any> {

    let response: any;
    try {

      const user = await this.userService.findOne(userId);
      const prodcut = await this.productService.findOneOnlyProduct(createBagDto.productId)

      console.log("product: ", prodcut)

      if(!user || !prodcut){
        response = {
          error: "User or product is not found",
          message: "Could not create record on your shopping card",
        }

        throw new HttpException(response, HttpStatus.NOT_FOUND)
      }
      const createBagRecord = await this.bagRepository.create({
        user: user,
        product: prodcut,
        quantity: createBagDto.quantity,
        size: createBagDto.size,
        color: createBagDto.color,
        addedAt: new Date()
      })

      if(createBagDto){
        const savedBagRecord = await this.bagRepository.save(createBagRecord);
        if(savedBagRecord) {
          response = savedBagRecord;
          //update quanity on service
          const newQuantity: number = prodcut.quantity - Number.parseInt(createBagDto.quantity)
          await this.productService.update(prodcut.id, {
            quantity: newQuantity
          })
        };
      }
    } catch (error) {

      console.log("Error in creating bag record: ", error)
      response = {
        error: "Internal server error",
        message: "Internal server error",
      }

      throw new HttpException(response, HttpStatus.INTERNAL_SERVER_ERROR)
    }
    return response
  }


  async getBagProductPerUser(userId: number): Promise<any>{
    let response: any;
    try {
      const bagRecords = await this.bagRepository.find({
        where: {
          user: {
            id: userId
          }
        },
        relations: {
          user: true,
          product: {
            attachments: true,
            category: true
          },
        }
      })

      response = bagRecords;
    } catch (error) {
      throw new HttpException("Internal server error",HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return response;
     
  }

  findAll() {
    return `This action returns all bag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bag`;
  }

  update(id: number, updateBagDto: any) {
    return `This action updates a #${id} bag`;
  }

  async remove(id: number, userId: number): Promise<any>{
    let response: any;
    try {

      const bagItem = await this.bagRepository.findOne({
        where: {
          id: id,
          user: {
            id: userId
          }
        },
        relations: {
          product: true,
          user: true
        }
      })

      if(!bagItem){
        throw new HttpException("Bag item not found ",HttpStatus.NOT_FOUND)

      }

      const bagQuantity: number = bagItem.quantity;
      const product = bagItem.product;


      const deletedBagItem = await this.bagRepository.delete({
        id: id
      })

      if(deletedBagItem){
          const newQuantity: number = Number.parseInt(product.quantity.toString()) + bagQuantity
          await this.productService.update(product.id, {
            quantity: newQuantity
          })
      }

      response = {
        success: true,
      }
    } catch (error) {
      throw new HttpException("Internal server error",HttpStatus.INTERNAL_SERVER_ERROR)

    }

    return response
  }
}
