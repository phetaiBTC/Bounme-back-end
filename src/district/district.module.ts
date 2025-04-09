import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { District } from './entities/district.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([District])],
  providers: [DistrictService],
  controllers: [DistrictController],
  exports: [DistrictService],
})
export class DistrictModule {}
