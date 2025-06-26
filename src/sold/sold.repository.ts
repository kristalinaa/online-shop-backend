import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Sold } from './entities/sold.entity';

@Injectable()
export class SoldRepository extends Repository<Sold> {
  constructor(private dataSource: DataSource) {
    super(Sold, dataSource.createEntityManager());
  }

 
}
