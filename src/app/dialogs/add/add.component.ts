import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Education } from 'src/app/models/education';
import { FormControl, Validators } from '@angular/forms';
import { SeekerServiceService } from 'src/app/Services/seeker-service.service';
import { Issue } from 'src/app/models/Issue';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formControl: any;


  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Issue, public dataService: SeekerServiceService) { }




  Classes = ['Xth', 'XIIth', 'UG', 'PG', 'Diploma'];
  Boards = ['CBSE', 'STATE', 'ICSE', 'B.Tech', 'B.A', 'M.Tech', 'M.S.'];
  validation_messages = {
    'institute': [
      { type: 'pattern', message: 'No special characters are allowed' },
      { type: 'required', message: 'Full name is required' }
    ]
  };






  ngOnInit() {
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addIssue(this.data);
  }

}
