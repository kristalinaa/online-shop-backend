import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IGetUserAuthInfoRequest } from 'src/common/interceptor/test';

@Controller('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBankAccountDto: any,@Req() req: IGetUserAuthInfoRequest) {
    let user = req.user as any;

    return this.bankAccountService.create(createBankAccountDto,user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAllPerUser(@Req() req: IGetUserAuthInfoRequest) {
    let user = req.user as any;

    return this.bankAccountService.findAll(user.userId);
  }


  @UseGuards(JwtAuthGuard)
  @Get('single/:id')
  getSingleCard(@Req() req: IGetUserAuthInfoRequest,@Param('id') id: number) {
    let user = req.user as any;

    return this.bankAccountService.findOne(id, user.userId);
  }


  @UseGuards(JwtAuthGuard)
  @Get('single/timeline/:id')
  getSingleTimelineCard(@Req() req: IGetUserAuthInfoRequest,@Param('id') id: number) {
    let user = req.user as any;

    return this.bankAccountService.getHistoryPerCard(id, user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.bankAccountService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)

  @Patch(':id')
  update(@Req() req: IGetUserAuthInfoRequest,@Param('id') id: string, @Body() updateBankAccountDto: any) {
    let user = req.user as any;

    return this.bankAccountService.update(+id, updateBankAccountDto,user.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankAccountService.remove(+id);
  }
}
