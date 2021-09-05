import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public inputTask;
  public tasks;
  
  constructor(private itemService: ItemsService, private taskService: TaskService) { 
    this.tasks = itemService.getItemsBasic();
  }

  ngOnInit(): void {
  }

  addTask() {
    if (this.inputTask == '') {
    }
    else {
      this.tasks.push( {
        title: this.inputTask,
        checked: false
      });
      this.inputTask = "";
    }
  }

  checkTask(key) {
    this.tasks[key].checked = !this.tasks[key].checked;
  }

  removeTask(key) {
    this.tasks.splice(key, 1);
  }

}
