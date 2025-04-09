import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DistrictModule } from './district/district.module';
import { ProvinceModule } from './province/province.module';
import { config } from 'dotenv';
config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'test',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    DistrictModule,
    ProvinceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
