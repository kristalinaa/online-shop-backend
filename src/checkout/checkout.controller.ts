import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ROLE } from 'src/role/role.enum';
import { HasRoles } from 'src/role/roles.decorator';
import { IGetUserAuthInfoRequest } from 'src/common/interceptor/test';
import { Role } from 'src/role/entities/role.entity';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @UseGuards(JwtAuthGuard)
  @HasRoles(ROLE.CLIENT)
  @Post()
  create(@Body() createCheckoutDto: any,@Req() req: IGetUserAuthInfoRequest ) {
    let user = req.user as any;

    return this.checkoutService.create(createCheckoutDto, user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: IGetUserAuthInfoRequest) {
    let user = req.user as any;
    console.log("----user ", user)
    if(user.roles.includes('company')){
      return this.checkoutService.findAllPerCompany(user.userId);

    }else {
      return this.checkoutService.findAll(user.userId);

    }
  }



  @UseGuards(JwtAuthGuard)
  @Get('single/:id')
  getSingleCheckout(@Req() req: IGetUserAuthInfoRequest,@Param('id') id: number) {
    let user = req.user as any;
    console.log("----user ", user)
    if(user.roles.includes('company')){
      return this.checkoutService.findSinglePerCompany(user.userId, id);

    }else {
      return this.checkoutService.findSingle(user.userId,id);

    }
  }


  // @UseGuards(JwtAuthGuard)
  // @Get('per-company')
  // @HasRoles(ROLE.COMPANY)
  // findAllPerCompany(@Req() req: IGetUserAuthInfoRequest) {
  //   let user = req.user as any;

  //   return this.checkoutService.findAllPerCompany(user.userId);
  // }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckoutDto: UpdateCheckoutDto) {
    return this.checkoutService.update(+id, updateCheckoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkoutService.remove(+id);
  }
}
