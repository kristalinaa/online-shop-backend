import { User } from "src/user/entities/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BankAccount {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.bankAccounts)
    user: User
}
