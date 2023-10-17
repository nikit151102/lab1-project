export class PlantComponent {
    species: string;
    age: number;
    height: number;
    state: string;

    constructor() {
        this.species = 'Неизвестное растение';
        this.age = 0;
        this.height = 0;
        this.state = 'растет';
    }

    setplant(species: string, age: number, height: number, state: string) {
        this.species = species;
        this.age = age;
        this.height = height;
        this.state = state;
    }

    print() {
        return {
            "species": this.species,
            "age": this.age,
            "height": this.height,
            "state": this.state
        }
    }

    grow() {
        this.height += 0.1;
        console.log("Высота :" , this.height)
    }

    bloom() {
        this.state = 'цветет';
        console.log("Состояние  :" , this.state)
    }

    bear_fruit() {
        this.state = 'плодоносит';
        console.log("Состояние  :" , this.state)
    }
    
    Destroy(){
        this.height -= 0.1
        if(this.height>0){
            console.log("Высота :" , this.height)
        }else{
            console.log("Растения больше нет" )
        }

    }

}
