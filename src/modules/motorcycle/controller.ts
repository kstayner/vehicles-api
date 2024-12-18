import { Controller, Post, Get, Body } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { CreateMotorcycleDto } from './motorcycle.dto';

@Controller('motorcycles')
export class MotorcycleController {
  constructor(private readonly motorcycleService: MotorcycleService) {}

  @Post()
  create(@Body() createMotorcycleDto: CreateMotorcycleDto) {
    return this.motorcycleService.create(createMotorcycleDto);
  }
}