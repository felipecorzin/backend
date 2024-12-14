import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadesDto } from './dto/update-actividade.dto';

@Controller('actividades/')
export class ActividadesController {
  constructor(private readonly actividadesService: ActividadesService) {}

  @Post('create')
  create(@Body() createActividadeDto: CreateActividadeDto) {
    return this.actividadesService.create(createActividadeDto);
  }

  @Get('getAll')
  findAll() {
    return this.actividadesService.findAll();
  }

  @Get('getById/:id')
  findOne(@Param('id') id: number) {
    return this.actividadesService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateActividadesDto: UpdateActividadesDto) {
    return this.actividadesService.update(id, updateActividadesDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.actividadesService.remove(id);
  }
}
