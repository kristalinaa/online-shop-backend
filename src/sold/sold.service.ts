import { Injectable } from '@nestjs/common';
import { CreateSoldDto } from './dto/create-sold.dto';
import { UpdateSoldDto } from './dto/update-sold.dto';
import { SoldRepository } from './sold.repository';

@Injectable()
export class SoldService {

  constructor(
    private soldRepository: SoldRepository
  ){

  }


  async create(createSoldDto: any) {
    return await this.soldRepository.save(createSoldDto)
  }

  findAll() {
    return `This action returns all sold`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sold`;
  }

  update(id: number, updateSoldDto: UpdateSoldDto) {
    return `This action updates a #${id} sold`;
  }

  remove(id: number) {
    return `This action removes a #${id} sold`;
  }
}
