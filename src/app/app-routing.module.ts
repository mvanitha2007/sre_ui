import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { RentComponent } from './rent/rent.component';
import { SalesComponent } from './sales/sales.component';
import { PostpropertyComponent } from './postproperty/postproperty.component';
import { LeaseComponent } from './lease/lease.component';


const routes: Routes = [

  {path:'', component: HomecontentComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'sales', component:SalesComponent},
  {path:'rent', component:RentComponent},
  {path:'lease', component:LeaseComponent},
  {path:'postproperty', component:PostpropertyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
