import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
