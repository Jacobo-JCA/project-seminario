import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; 

import { AuthModule } from './auth/auth.module';
import { StudentProgramComponent } from './student/student-program/student-program.component';
import { StudentModulComponent } from './student/student-modul/student-modul.component';
import { StudentTareaComponent } from './student/student-tarea/student-tarea.component';
import { StudentCalendarComponent } from './student/student-calendar/student-calendar.component';
import { HistoryComponent } from './student/history/history.component';
import { StudentProjectComponent } from './student/student-project/student-project.component';
import { StudentHelpComponent } from './student/student-help/student-help.component';
import { StudentLideresComponent } from './student/student-lideres/student-lideres.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentProgramComponent,
    StudentModulComponent,
    StudentTareaComponent,
    StudentCalendarComponent,
    HistoryComponent,
    StudentProjectComponent,
    StudentHelpComponent,
    StudentLideresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    AuthModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }