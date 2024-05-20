import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Media } from './entities/media.entity';


@Module({
    imports: [
    TypeOrmModule.forFeature([Media]),
    PassportModule,
    JwtModule.registerAsync({
        imports:[ConfigModule],
        useFactory: async (configService: ConfigService) =>({
            secret: configService.getOrThrow<string>('JWT_SECRET'),
            signOptions: {
                algorithm: configService.getOrThrow('JWT_ALGORITHM'),
                expression: configService.getOrThrow<string>('JWT_EXPRESSION'),
            }
            
        }),
        inject: [ConfigService],
}),
PassportModule.register({
    defaultStrategy: 'jwt',
    // property: 'user',
    session: false,
})
],
    controllers: [MediaController],
    providers: [MediaService],
})

export class MediaModule { }