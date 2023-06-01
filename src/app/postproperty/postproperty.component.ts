import { Component, OnInit } from '@angular/core';
import { propertytype } from '../class/propertytype';
import { propertysubtype } from '../class/propertysubtype';
import { TypeService } from '../type.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-postproperty',
  templateUrl: './postproperty.component.html',
  styleUrls: ['./postproperty.component.css']
})
export class PostpropertyComponent implements OnInit{

  selectedPropertyType: propertytype = new propertytype(1,'');
  propertytypes: propertytype[] =[];
  propertysubtypes: propertysubtype[] = [];
  selectedSubType:any;
  choosenpropertytypeid:any;
  choosenpropertytypename:any;

  constructor(private typeService: TypeService,private http:HttpClient) { }

  ngOnInit() {
    this.propertytypes = this.typeService.getpropertytypes();
    this.onSelect(this.selectedPropertyType.id);    
  }

  onSelect(propertytypeid:any) {
    this.propertysubtypes = this.typeService.getpropertysubtypes().filter((item) => item.propertytypeid == propertytypeid);
  }

}
