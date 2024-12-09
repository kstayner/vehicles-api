// car.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './car.dto';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }
}
