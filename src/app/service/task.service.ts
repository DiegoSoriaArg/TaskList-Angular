import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASK} from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5001/task'

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}