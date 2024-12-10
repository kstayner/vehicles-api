import { Injectable } from '@nestjs/common';
import { CreateMotorcycleDto } from './motorcycle.dto';

@Injectable()
export class MotorcycleService {
  private motorcycles = [];

  create(motorcycleDto: CreateMotorcycleDto) {
    const newMotorcycle = { id: Date.now(), ...motorcycleDto };
    this.motorcycles.push(newMotorcycle);
    return newMotorcycle;
  }
}
