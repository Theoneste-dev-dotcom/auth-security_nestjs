/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get()
  getHello(): string {
    console.log(`GetHello call from ip: 10.12.13.14`);
    return this.appService.getHello();
  }
}
