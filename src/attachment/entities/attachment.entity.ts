import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attachment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{
        nullable: false,
        length: 200,
        name: 'path'
    })
    path: string;

    @Column('varchar',{
        nullable: false,
        length: 200,
        name: 'fileName'
    })
    fileName: string;


      // ✅ Many attachments belong to one product
      @ManyToOne(() => Product, (product) => product.attachments, { onDelete: 'CASCADE' })
      product: Product;
}
