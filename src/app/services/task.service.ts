import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ITask } from './ITask';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'api/tasks';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<ITask[]>('getTasks', []))
      );
  }

  deleteTask(task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask>(url)
      .pipe(
        tap(_ => this.log(`deleted task id=${task.id}`)),
        catchError(this.handleError<ITask>('deleteTask'))
      );
  }

  checkTask(task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<ITask>(url, task, httpOptions)
      .pipe(
        tap(_ => this.log(`check task id=${task.id}`)),
        catchError(this.handleError<ITask>('checkTask'))
      );
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task, httpOptions).pipe(
      tap((newTask: ITask) => this.log(`added task w/ id=${newTask.id}`)),
      catchError(this.handleError<ITask>('addTask'))
    );
  }

  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

}
