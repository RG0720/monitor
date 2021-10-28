import { Controller, Get } from '@nestjs/common';
import { Hello } from '@rg0720/types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Hello {
    return { name: this.appService.getHello() };
  }
}
