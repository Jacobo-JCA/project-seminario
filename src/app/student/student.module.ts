import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { StudentTareaComponent } from './student-tarea/student-tarea.component';
import { StudentCalendarComponent } from './student-calendar/student-calendar.component';
import { HistoryComponent } from './history/history.component';
import { StudentProjectComponent } from './student-project/student-project.component';
import { StudentHelpComponent } from './student-help/student-help.component';
import { StudentLideresComponent } from './student-lideres/student-lideres.component';
import { StudentProgramComponent } from './student-program/student-program.component';


import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StudentModulComponent } from './student-modul/student-modul.component';
import { StudentRoutingModule } from './student-routing.module';
import { NavComponent } from './nav/nav.component';






@NgModule({
  exports: [
    StudentProgramComponent,
    StudentTareaComponent,
    StudentCalendarComponent,
    HistoryComponent,
    StudentProjectComponent,
    StudentHelpComponent,
    StudentLideresComponent,
    StudentModulComponent,
    NavComponent
  ],
  declarations: [
    StudentProgramComponent,
    StudentTareaComponent,
    StudentCalendarComponent,
    HistoryComponent,
    StudentProjectComponent,
    StudentHelpComponent,
    StudentLideresComponent,
    StudentModulComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule,
    StudentRoutingModule


 ]
})
export class StudentModule { }
//para separar los componentes solo se debe crear un modulo que en este caso seria student module.ts
//para poder importar y exportar todos los componentes y para que luego este mismo module se lo importe en app module.
