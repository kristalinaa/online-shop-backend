// bag.entity.ts
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Bag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.bag, { eager: true, onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Product, product => product.bag, { eager: true, onDelete: 'CASCADE' })
  product: Product;

  @Column({ default: 1 })
  quantity: number;

  @Column({ })
  size: string;

  @Column({  })
  color: string;

  @CreateDateColumn()
  addedAt: Date;
}
