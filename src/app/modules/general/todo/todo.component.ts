import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from '../../../services/ITask';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public inputTask = "";
  tasks: ITask[] = [];
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.addTask({ title: name, isChecked: false } as ITask)
      .subscribe(hero => {
        this.tasks.push(hero);
      });
  }
  
  checkTask(task: ITask) {
    task.isChecked = !task.isChecked;
    this.taskService.checkTask(task).subscribe();
  }

  deleteTask(task: ITask) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }

}
