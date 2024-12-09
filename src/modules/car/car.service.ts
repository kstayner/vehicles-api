// car.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './car.dto';

@Injectable()
export class CarService {
  private cars = [];

  create(carDto: CreateCarDto) {
    const newCar = { id: Date.now(), ...carDto };
    this.cars.push(newCar);
    return newCar;
  }
}
