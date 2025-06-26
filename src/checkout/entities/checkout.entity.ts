import { BankAccount } from "src/bank-account/entities/bank-account.entity";
import { Sold } from "src/sold/entities/sold.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Checkout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'name'
    })
    name: string;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'email'
    })
    email: string;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'country'
    })
    country: string;
  
    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'city'
    })
    city: string;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'phoneNumber'
    })
    phoneNumber: string;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'paymentMethod'
    })
    paymentMethod: string;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'deliveryMethod'
    })
    deliveryMethod: string;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'total'
    })
    total: string;


    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.checkouts)
    user: User


    @OneToMany(() => Sold, (sold) => sold.checkout, { cascade: true })
    soldItems: Sold[];

    @ManyToOne(() => BankAccount, (bankAccount) => bankAccount.checkouts)
    bankAccount: BankAccount
}
