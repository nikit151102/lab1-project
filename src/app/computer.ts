interface Computers {
    RAM: number,
    memory: number,
    processor: number,

    setRAM(value: number): void,
    setmemory(value: number): void,
    setprocessor(value: number): void,
}


export class Computer implements Computers {
    processor: number;
    RAM: number;
    memory: number;

    constructor() {
        this.processor = 0;
        this.RAM = 0;
        this.memory = 0;
    }

    setRAM(value: number) {
        this.RAM = value;
    }

    setmemory(value: number) {
        this.memory = value;
    }

    setprocessor(value: number) {
        this.processor = value;
    }
}
