import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { District } from './entities/district.entity';
@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>,
  ) { }
  findAll() {
    return this.districtRepository.find();
  }
  findOne(id: number) {
    return this.districtRepository.findOneBy({id})
  }
}
