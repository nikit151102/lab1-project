import { ComputerBuilder } from './builder';

export class Director {
    private computerBuilder: ComputerBuilder;

    constructor(builder: ComputerBuilder) {
        this.computerBuilder = builder;
    }

    setComputerBuilder(builder: ComputerBuilder) {
        this.computerBuilder = builder;
    }

    constructComputer(processor: number, RAM: number, memory: number) {
        this.computerBuilder.setProcessor(processor);
        this.computerBuilder.setRAM(RAM);
        this.computerBuilder.setMemory(memory);
    }
}

