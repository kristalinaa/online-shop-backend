import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }

  async getProductsPerCategory(categoryName: string) {
    const categoryRepo = this.manager.getTreeRepository(Category);

    // 1. Merr kategorinë bazë
    const root = await categoryRepo.findOne({ where: { name: categoryName } });
    if (!root) {
      throw new NotFoundException(`Kategoria '${categoryName}' nuk u gjet`);
    }

    // 2. Gjej *të gjithë* pasardhësit (përfshirë vetë root-in)
    const descendants = await categoryRepo.findDescendants(root);
    const ids = descendants.map(c => c.id);

    // 3. Kërko produktet që i përkasin kujtdo prej këtyre ID-ve
    return this.createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category')
      .innerJoinAndSelect('product.attachments', 'attachments')
      .where('category.id IN (:...ids)', { ids })
      .limit(20)                  // nëse të duhet limit
      .getMany();                // kthe listën, jo vetëm QueryBuilder
  }



  async getProductsListPerCategory(categoryName: string, limit: number = 5) {
    const categoryRepo = this.manager.getTreeRepository(Category);

    // 1. Merr kategorinë bazë
    const root = await categoryRepo.findOne({ where: { name: categoryName } });
    if (!root) {
      throw new NotFoundException(`Kategoria '${categoryName}' nuk u gjet`);
    }

    // 2. Gjej *të gjithë* pasardhësit (përfshirë vetë root-in)
    const descendants = await categoryRepo.findDescendants(root);
    const ids = descendants.map(c => c.id);

    // 3. Kërko produktet që i përkasin kujtdo prej këtyre ID-ve
    return this.createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category')
      .innerJoinAndSelect('product.attachments', 'attachments')
      .where('category.id IN (:...ids)', { ids })

      // .limit(limit)                  // nëse të duhet limit
      .getMany();                // kthe listën, jo vetëm QueryBuilder
  }
}
