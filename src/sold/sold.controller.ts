import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldService } from './sold.service';
import { CreateSoldDto } from './dto/create-sold.dto';
import { UpdateSoldDto } from './dto/update-sold.dto';

@Controller('sold')
export class SoldController {
  constructor(private readonly soldService: SoldService) {}

  @Post()
  create(@Body() createSoldDto: CreateSoldDto) {
    return this.soldService.create(createSoldDto);
  }

  @Get()
  findAll() {
    return this.soldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldDto: UpdateSoldDto) {
    return this.soldService.update(+id, updateSoldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldService.remove(+id);
  }
}
