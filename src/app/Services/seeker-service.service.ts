import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Education } from '../models/education';


@Injectable({
  providedIn: 'root'
})
export class SeekerServiceService {

  private readonly API_URL = '';

  dataChange: BehaviorSubject<Education[]> = new BehaviorSubject<Education[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor() { }

 
  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */

  addData (data: Education): void {
    this.dialogData = data;
  }

  updateIssue (data: Education): void {
    this.dialogData = data;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }
}


