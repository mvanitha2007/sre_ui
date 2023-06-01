import { Injectable } from '@angular/core';
import { propertytype } from './class/propertytype';
import { propertysubtype } from './class/propertysubtype';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }

  getpropertytypes() {
    return [
     new propertytype(1, 'Commercial' ),
     new propertytype(2, 'Residential' ),
     new propertytype(3, 'Agriculture Land' ),
    ];
  }

  getpropertysubtypes() {
    return [
      new propertysubtype(1, 1, 'Commercial Building' ),
      new propertysubtype(2, 1, 'Office Space' ),
      new propertysubtype(3, 1, 'Commercial Land'),
      new propertysubtype(4, 1, 'Godowns'),
      new propertysubtype(5, 2, 'House' ),
      new propertysubtype(6, 2, 'Villa'),
      new propertysubtype(7, 2, 'Apartment' ),
      new propertysubtype(8, 2, 'Plat' ),
      new propertysubtype(9, 3, 'Agriculture Land' )
     ];
   }
}
