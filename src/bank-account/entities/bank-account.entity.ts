import { Checkout } from "src/checkout/entities/checkout.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BankAccount {

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
        name: 'cardNumber'
    })
    cardNumber: string;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'expiry'
    })
    expiry: string;


    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'cvv'
    })
    cvv: string;

    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'total'
    })
    total: string;


    @Column('varchar',{
        nullable: false,
        length: 50,
        name: 'type'
    })
    type: string;


    @ManyToOne(() => User, (user) => user.bankAccounts)
    user: User


    @OneToMany(() => Checkout, (checkout) => checkout)
  checkouts?: Checkout[];
}
