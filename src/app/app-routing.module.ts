import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomecontentComponent } from './homecontent/homecontent.component';

const routes: Routes = [

  {path:'', component: HomecontentComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
