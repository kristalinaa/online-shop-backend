import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Checkout } from 'src/checkout/entities/checkout.entity';

@Entity()
export class Sold {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @ManyToOne(() => Checkout, (checkout) => checkout.soldItems, { onDelete: 'CASCADE' })
  checkout: Checkout;

  @Column('int')
  quantity: number;


  // Optional: for product name or snapshot data
  // @Column('varchar', { length: 100 })
  // productNameSnapshot: string;
}
