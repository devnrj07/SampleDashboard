import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Education } from '../models/education';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Issue } from '../models/Issue';


@Injectable({
  providedIn: 'root'
})
export class SeekerServiceService {

  private readonly API_URL = '';

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) { }

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }



  getAllIssues(): void {
    this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  /** CRUD METHODS */

  addIssue(data: Issue): void {
    this.dialogData = data;
  }

  updateIssue(data: Issue): void {
    this.dialogData = data;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }
}


