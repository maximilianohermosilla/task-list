import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import {Task} from '../components/task'
import {TASKS} from '../components/mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
}
