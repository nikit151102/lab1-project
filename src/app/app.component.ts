import { Component, OnInit } from '@angular/core';
import { AnimalComponent } from './animal';
import { PlantComponent } from './plants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public animal: AnimalComponent, public plant: PlantComponent) {}

  ngOnInit() {
    // Инициализация компонентов
  }

  // Animal properties
  name: string = '';
  ageAnimal: number = 0;
  weight: number = 0;
  gender: string = '';

  // Plant properties
  species: string = '';
  agePlant: number = 0;
  height: number = 0;
  state: string = '';

  // Method to set animal properties
  setAnimal() {
    this.animal.set_animal(this.name, this.ageAnimal, this.weight, this.gender);
  }

  // Method to set plant properties
  setPlant() {
    this.plant.setplant(this.species, this.agePlant, this.height, this.state);
  }

  // Method to interact with plant from animal
  interactWithPlant( k:number) {
    this.animal.interact_with_plant(this.plant,k);
  }
}
