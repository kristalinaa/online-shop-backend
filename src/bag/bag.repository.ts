import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Bag } from "./entities/bag.entity";

@Injectable()
export class BagRepository extends Repository<Bag> {
    constructor(private dataSource: DataSource){
        super(Bag,dataSource.createEntityManager())
    }
}