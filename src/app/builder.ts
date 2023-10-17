import { Computer } from "./computer";

export interface ComputerBuilder {
    setProcessor(value: number): void;
    setRAM(value: number): void;
    setMemory(value: number): void;
    getResult(): Computer;
}


export class GamingComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setProcessor(value: number) {
        this.computer.setprocessor(value);
    }

    setRAM(value: number) {
        this.computer.setRAM(value);
    }

    setMemory(value: number) {
        this.computer.setmemory(value);
    }

    getResult() {
        return this.computer;
    }
}


export class WorkstationComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setProcessor(value: number) {
        this.computer.setprocessor(value);
    }

    setRAM(value: number) {
        this.computer.setRAM(value);
    }

    setMemory(value: number) {
        this.computer.setmemory(value);
    }

    getResult() {
        return this.computer;
    }
}

export class MinComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setProcessor(value: number) {
        this.computer.setprocessor(value);
    }

    setRAM(value: number) {
        this.computer.setRAM(value);
    }

    setMemory(value: number) {
        this.computer.setmemory(value);
    }

    getResult() {
        return this.computer;
    }
}