import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacetState } from '../products/models/productResponse';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {

  facets! : Observable<FacetState>;

  constructor() { }

  ngOnInit(): void {
  }

}
