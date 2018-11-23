import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatStepperModule, MatFormFieldModule, MatTableModule,
  MatSortModule, MatToolbarModule, MatPaginatorModule, MatDialogModule,
  MatSelectModule, MatChipsModule, MatAutocompleteModule, MatExpansionModule,
  MatListModule, 
  MatInputModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ResumeComponent } from './resume/resume.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AddComponent } from './dialogs/add/add.component';
import { EditComponent } from './dialogs/edit/edit.component';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { SeekerServiceService } from './Services/seeker-service.service';
import { JobComponent } from './job/job.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    ResumeComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    JobComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatStepperModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatListModule

  ],
  providers: [SeekerServiceService],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
