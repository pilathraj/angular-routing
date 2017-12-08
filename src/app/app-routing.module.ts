import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';


const routes:Routes =  [
     //{path:'', component:HomeComponent},
    {path: '', redirectTo:'/departments', pathMatch:'full'}, 
    {path:'departments', component:DepartmentListComponent},
    {path:'departments/:id', component:DepartmentDetailComponent},
   
    {path:'employees', component:EmployeeListComponent, children:[ {path:'info', component:EmployeeInfoComponent}]  
    },
    {path:'**', component:PageNotFoundComponent}
    ];

@NgModule({  
  imports: [   
    RouterModule.forRoot(routes,  { enableTracing: true } )
  ],
  exports:[
    RouterModule
  ]  
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent,  EmployeeInfoComponent, PageNotFoundComponent]; 