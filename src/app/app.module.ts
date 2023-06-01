import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SalesComponent } from './sales/sales.component';
import { RentComponent } from './rent/rent.component';
import { PostpropertyComponent } from './postproperty/postproperty.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LeaseComponent } from './lease/lease.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuitemsComponent,
    BannerComponent,
    FooterComponent,
    HomecontentComponent,
    AboutusComponent,
    ContactusComponent,
    SalesComponent,
    RentComponent,
    PostpropertyComponent,
    LeaseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
