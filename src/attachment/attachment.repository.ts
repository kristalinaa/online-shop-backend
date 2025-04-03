import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Attachment } from "./entities/attachment.entity";

@Injectable()
export class AttachmentRepository extends Repository<Attachment> {
    constructor(private dataSource: DataSource){
        super(Attachment,dataSource.createEntityManager())
    }
}