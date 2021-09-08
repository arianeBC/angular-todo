import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITask } from './ITask';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {
        id: 4,
        title:"faire les courses", 
        checked: false
      }, 
      {
        id: 5,
        title:"faire la lessive", 
        checked: false
      }, 
      {
        id: 6,
        title:"regarder netflix", 
        checked: false
      },
    ];
    return {tasks};
  }

  // Overrides the genId method to ensure that a task always has an id.
  // If the tasks array is empty,
  // the method below returns the initial number (4).
  // if the tasks array is not empty, the method below returns the highest
  // task id + 1.
  genId(tasks: ITask[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 4;
  }
}
