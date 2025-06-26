import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }

  async getProductsPerCategory(categoryName: string) {
    // Step 1: Find category ID by name
    const category = await this.manager
      .getRepository(Category)
      .findOne({ where: { name: categoryName } });

    if (!category) {
      throw new Error(`Category with name '${categoryName}' not found`);
    }

    // Step 2: Get products linked to this category or its descendants
    const queryBuilder = this.createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category')
      .innerJoinAndSelect('product.attachments', 'attachments')
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select('c.id')
          .from('category', 'c')
          .where(
            'c.id = :categoryId OR c.parentId IN (SELECT id FROM category WHERE parentId = :categoryId)',
          )
          .setParameter('categoryId', category.id)
          .getQuery();

        return `category.id IN (${subQuery})`;
      })
      .limit(5);

    return queryBuilder;
  }


  async getProductsListPerCategory(categoryName: string) {
    // Step 1: Find category ID by name
    const category = await this.manager
      .getRepository(Category)
      .findOne({ where: { name: categoryName } });

    if (!category) {
      throw new Error(`Category with name '${categoryName}' not found`);
    }

    // Step 2: Get products linked to this category or its descendants
    const queryBuilder = this.createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category')
      .innerJoinAndSelect('product.attachments', 'attachments')
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select('c.id')
          .from('category', 'c')
          .where(
            'c.id = :categoryId OR c.parentId IN (SELECT id FROM category WHERE parentId = :categoryId)',
          )
          .setParameter('categoryId', category.id)
          .getQuery();

        return `category.id IN (${subQuery})`;
      })
      .limit(5);

    return queryBuilder;
  }
}
