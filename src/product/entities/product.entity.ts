import { Attachment } from "src/attachment/entities/attachment.entity";
import { Bag } from "src/bag/entities/bag.entity";
import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'productName'
    })
    productName: string;
  
    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'description'
    })
    description: string;


    @Column('numeric',{
        nullable: false,
        default: 0,
        name: 'quantity'
    })
    quantity: number;
  

    @Column('numeric',{
        nullable: false,
        default: 0,
        name: 'price'
    })
    price: number;

    @Column('varchar',{
        nullable: false,
        length: 50,
        default: 'LEK',
        name: 'currency'
    })
    currency: string;

    @Column('varchar',{
        nullable: false,
        length: 100,
        name: 'details'
    })
    details: string;

    @Column({
        nullable: true,
        type: 'json',
        name: 'color'
    })
    color: string[] = [];

    @Column('varchar',{
        nullable: true,
        length: 10,
        name: 'size'
    })
    size: string;

    @Column('numeric',{
        nullable: false,
        default: 5,
        name: 'review'
    })
    review: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.bankAccounts)
    user: User


    @ManyToOne(() => Category, (category) => category.products)
    category: Category
    // ✅ One product can have many attachments
    @OneToMany(() => Attachment, (attachment) => attachment.product, { cascade: true })
    attachments: Attachment[];


    @OneToMany(() => Bag, bag => bag.product)
bag: Bag[];
    
}
