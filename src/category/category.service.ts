import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    private categoryRepository:CategoryRepository
  ){

  }
  async create(createCategoryDto: CreateCategoryDto): Promise<any> {
    let response: any;
    try {

      let parent = null;
      if(createCategoryDto.parent){
        parent = await this.categoryRepository.findOne({
          where: {
            id: createCategoryDto.parent
          }
        })
      }

      console.log("parent ", parent)
      const createdCategory = await this.categoryRepository.save({
        name: createCategoryDto.name,
        parent: parent

      })
      response = createCategoryDto;
    } catch (error) {
      console.log("_err ", error);
      
      throw new HttpException("Error in creating a category", HttpStatus.INTERNAL_SERVER_ERROR)
    }
    return response
  }

  async findAll(): Promise<any[]> {
    return await this.categoryRepository.manager.getTreeRepository(Category).findTrees()
  }

  async getRootsCategories(): Promise<any[]>{
    return await this.categoryRepository.manager.getTreeRepository(Category).findRoots()

  }
  async getChildrens(id: number): Promise<any>{

    const parent = await this.categoryRepository.findOne({
      where: {
        id: id
      }
    })

    return (await this.categoryRepository.manager.getTreeRepository(Category).findDescendantsTree(parent,{depth: 1}))
  }
  async findOne(id: number) {
    return await this.categoryRepository.findOne({
      where: {
        id: id
      }
    })
  }

  async countAllCategories(): Promise<number> {
    return await this.categoryRepository.count();
  }

  async findOneByName(category: string) {
    return await this.categoryRepository.findOne({
      where: {
        name: category
      }
    })
  }


  async findAncestors(id: number) {
    const category = await this.categoryRepository.findOne({
      where: {
        id: id
      }
    })
    return (await this.categoryRepository.manager.getTreeRepository(Category).findAncestors(category))

  }

  async update(id: number, updateCategoryDto: any) {
    return await this.categoryRepository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
