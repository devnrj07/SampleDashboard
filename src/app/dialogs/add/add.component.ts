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
  formControl: FormControl;


  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Education, public dataService: SeekerServiceService) { }




  Classes = ['Xth', 'XIIth', 'UG', 'PG', 'Diploma'];

  validation_messages = {
    'institute': [
      { type: 'pattern', message: 'No special characters are allowed' },
      { type: 'required', message: 'Full name is required' }
    ]
  };

  minDate = new Date(2000, 0, 1);
  maxDate = Date.now();




  ngOnInit() {
  }

  getErrorMessage() {
    
  }

  submit() {
    // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addIssue(this.data);
  }

}
