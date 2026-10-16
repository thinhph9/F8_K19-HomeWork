import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProvinceModule } from './module/province/module.js';

@Module({
  imports: [ProvinceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
