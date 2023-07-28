import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthComponent } from '../auth/auth/auth.component';
import { StudentProgramComponent } from './student-program/student-program.component';
import { StudentModulComponent } from './student-modul/student-modul.component';
import { StudentTareaComponent } from './student-tarea/student-tarea.component';
import { StudentCalendarComponent } from './student-calendar/student-calendar.component';
import { HistoryComponent } from './history/history.component';
import { StudentProjectComponent } from './student-project/student-project.component';
import { StudentHelpComponent } from './student-help/student-help.component';
import { StudentLideresComponent } from './student-lideres/student-lideres.component';



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
export class StudentRoutingModule { }

//El student routing module siempre debe estar en dentro del student module
//para que se pueda conectar con el app module principal y pueda ser visible en la pagina
//PD: si se crea manualmente este podria venir con un nombre por defecto que se lo debe cambiar
