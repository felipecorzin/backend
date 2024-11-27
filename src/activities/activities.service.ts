import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivitiesService {

  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  
  async create(createActivityDto: CreateActivityDto) {
    return await this.activityRepository.save(createActivityDto);
  }

  async findAll() {
    return await this.activityRepository.find();
  }

  async findOne(id: number) {
    return await this.activityRepository.findOneBy({ id });
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    return await this.activityRepository.update(id,updateActivityDto)
  }
  
  async remove(id: number) {
    return await this.activityRepository.delete({ id }); // se le pasa el id
  }
}
