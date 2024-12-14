import { Injectable } from '@nestjs/common';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadesDto } from './dto/update-actividade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividades } from './entities/actividade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActividadesService {

  constructor(
    @InjectRepository(Actividades)
    private readonly actividadeRepository: Repository<Actividades>,
  ) {}

  async create(createActividadeDto: CreateActividadeDto) {
     return await this.actividadeRepository.save(createActividadeDto);
  }

  async findAll() {
    return await this.actividadeRepository.find();
  }

  async findOne(id: number) {
    return await this.actividadeRepository.findOneBy({ id });
  }

  async update(id: number, updateActividadeDto: UpdateActividadesDto) {
    return await this.actividadeRepository.update(id,updateActividadeDto)
  }

  async remove(id: number) {
    return await this.actividadeRepository.softDelete({ id });
  }
}
