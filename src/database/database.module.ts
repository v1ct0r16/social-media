import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Media } from "src/media/entities/media.entity";

@Module
    (
        {
            imports: [
              TypeOrmModule.forRootAsync({
                useFactory: (ConfigService: ConfigService) => ({
                  type: 'mysql',
                  host: ConfigService.getOrThrow('DB_HOST'),
                  port: ConfigService.getOrThrow('DB_PORT'),
                  username: ConfigService.getOrThrow('DB_USERNAME'),
                  password: ConfigService.getOrThrow('DB_PASSWORD'),
                  database: ConfigService.getOrThrow('DB_DATABASE'),
                  entities: [Media],
                  synchronize: false,
                }),
                inject: [ConfigService],
                   })
              ]
        }
    )

export class DatabaseModule{}