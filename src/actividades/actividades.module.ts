import { Module } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { ActividadesController } from './actividades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividades } from './entities/actividade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actividades])],
  controllers: [ActividadesController],
  providers: [ActividadesService],
})
export class ActividadesModule {}
