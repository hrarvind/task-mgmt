import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiRoot = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiRoot}/photos`);
  }
}
