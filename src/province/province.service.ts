import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Province } from './entities/province.entity';
@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province)
    private provinceRepository: Repository<Province>,
  ) { }
  findAll() {
    return this.provinceRepository.find();
  }
  findOne(id: number) {
    return this.provinceRepository.findOneBy({ id });
  }
}
