import { Injectable } from "@angular/core";
import { PlantComponent } from "./plants";

@Injectable()

export class AnimalComponent {
    name: string;
    age: number;
    weight: number;
    gender: string;

    constructor(private plant: PlantComponent) {
        this.name = 'Безымянное животное';
        this.age = 0;
        this.weight = 0;
        this.gender = 'неизвестно';
    }

    set_animal(name: string, age: number, weight: number, gender: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }

    print() {
        return {
            "name": this.name,
            "age": this.age,
            "weight": this.weight,
            "gender": this.gender
        }
    }

    move_around() {
        console.log("передвигаться")
    }

    eat() {
        console.log("питаться")
    }

    make_a_sound() {
        console.log("издавать_звук")
    }
    interact_with_plant(plant: PlantComponent, i: number) {
        console.log(`${this.name} взаимодействует с растением ${plant.species}`);
        if (i == 1) {
            plant.grow();
        } else if (i == 2) {
            plant.bloom();
        } else if (i == 3) {
            plant.bear_fruit();
        } else if (i == 4) {
            plant.Destroy()
        }
    }
}