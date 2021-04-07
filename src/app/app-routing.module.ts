import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
    {path:'home',component:HomeComponent,pathMatch:'full'},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
