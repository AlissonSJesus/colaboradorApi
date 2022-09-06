import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorAddComponent } from './colaborador-add/colaborador-add.component';
import { ColaboradorEditComponent } from './colaborador-edit/colaborador-edit.component';
import { ColaboradorGetComponent } from './colaborador-get/colaborador-get.component';

const routes: Routes = [
  {path: 'colaborador/criar', component: ColaboradorAddComponent},
  {path: 'colaborador/:id', component: ColaboradorEditComponent},
  {path:'colaborador', component: ColaboradorGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
