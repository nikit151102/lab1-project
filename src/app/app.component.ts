import { Component, OnInit } from '@angular/core';
import { Director } from './Director';
import { GamingComputerBuilder, WorkstationComputerBuilder, MinComputerBuilder } from './builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  gamingComputer: any; 
  workstationComputer: any; 
  minstationComputer: any; 
  ngOnInit() {
    // Создаем строителей
    const gamingBuilder = new GamingComputerBuilder();
    const workstationBuilder = new WorkstationComputerBuilder();
    const minComputerBuilder = new MinComputerBuilder();  
    // Создаем директора и инициализируем его строителя
    const director = new Director(gamingBuilder);

    // Собираем игровой компьютер
    director.constructComputer(3.2, 16, 1000);

    // Получаем готовый игровой компьютер и выводим его характеристики
    this.gamingComputer = gamingBuilder.getResult();

    // Меняем строителя на рабочую станцию
    director.setComputerBuilder(workstationBuilder);

    // Собираем рабочую станцию
    director.constructComputer(3.0, 32, 2000);

    // Получаем готовую рабочую станцию и выводим ее характеристики
     this.workstationComputer = workstationBuilder.getResult();
   
    // Меняем строителя 
    director.setComputerBuilder(minComputerBuilder);

    // Собираем 
    director.constructComputer(2.0, 8, 500);

    // Получаем  
     this.minstationComputer = workstationBuilder.getResult();



  }



}
