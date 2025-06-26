import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { BagService } from './bag.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IGetUserAuthInfoRequest } from 'src/common/interceptor/test';
import { ROLE } from 'src/role/role.enum';
import { HasRoles } from 'src/role/roles.decorator';

@Controller('bag')
export class BagController {
  constructor(private readonly bagService: BagService) {}



  


  @UseGuards(JwtAuthGuard)
  @HasRoles(ROLE.CLIENT)
  @Post()
  create(@Body() createBagDto: any,  @Req() req: IGetUserAuthInfoRequest ) {

    let user = req.user as any;

    return this.bagService.create(createBagDto,user.userId);
  }


  @UseGuards(JwtAuthGuard)
  @HasRoles(ROLE.CLIENT)
  @Get('product-per-user')
  getBagProductPerUser( @Req() req: IGetUserAuthInfoRequest ) {

    let user = req.user as any;

    return this.bagService.getBagProductPerUser(user.userId);
  }
  @Get()
  findAll() {
    return this.bagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBagDto: any) {
    return this.bagService.update(+id, updateBagDto);
  }


  @UseGuards(JwtAuthGuard)
  @HasRoles(ROLE.CLIENT)
  @Delete(':id')
  remove(@Param('id') id: string,  @Req() req: IGetUserAuthInfoRequest ) {
    let user = req.user as any;

    return this.bagService.remove(+id,user.userId);
  }
}
