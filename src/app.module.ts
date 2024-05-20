import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MediaModule } from './media/media.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }), 
    DatabaseModule, MediaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}