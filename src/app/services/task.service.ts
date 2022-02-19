import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// Task Interface
import { Task } from '../Task';

const headersOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(`${this.apiUrl}`);
    return tasks;
  }

  addTask(task: Task): Observable<Task> {
    const addedTask = this.http.post<Task>(this.apiUrl, task, headersOptions);
    return addedTask;
  }

  updateTask(task: Task): Observable<Task> {
    const updatedTask = this.http.put<Task>(
      `${this.apiUrl}/${task.id}`,
      task,
      headersOptions
    );
    return updatedTask;
  }

  deleteTask(task: Task): Observable<Task> {
    const response = this.http.delete<Task>(`${this.apiUrl}/${task.id}`);
    return response;
  }
}
