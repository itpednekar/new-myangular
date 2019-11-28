import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http : HttpClient)
  { 
    
  }
  url = "http://localhost:9898/employee";
  getEmployees()
  {
    return this.http.get(this.url);
  }
}
