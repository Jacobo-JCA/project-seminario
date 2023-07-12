import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { StudentProgramComponent } from './student/student-program/student-program.component';
import { StudentModulComponent } from './student/student-modul/student-modul.component';
import { StudentTareaComponent } from './student/student-tarea/student-tarea.component';
import { StudentCalendarComponent } from './student/student-calendar/student-calendar.component';
import { HistoryComponent } from './student/history/history.component';
import { StudentProjectComponent } from './student/student-project/student-project.component';
import { StudentHelpComponent } from './student/student-help/student-help.component';
import { StudentLideresComponent } from './student/student-lideres/student-lideres.component';



const routes: Routes = [
  { path: '', redirectTo:'/student-program', pathMatch: 'full'},
  { path: 'auth', component: AuthComponent },
  { path: 'student-program', component: StudentProgramComponent },
  { path: 'student-modul', component: StudentModulComponent },
  { path: 'student-tarea', component: StudentTareaComponent},
  { path: 'student-calendar', component: StudentCalendarComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'student-project', component: StudentProjectComponent},
  { path: 'student-help', component: StudentHelpComponent},
  { path: 'student-lideres', component: StudentLideresComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
