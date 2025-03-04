import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  properties: any;

  constructor(private service: InterceptorService, private router: Router) {
    this.getPropertyList();
  }

  ngOnInit(): void {}
  getPropertyList() {
    this.service.get_api_headers('properties').then((data) => {
      this.properties = data;
    });
  }
  showPropertyDetail(property_name: string) {
    this.router.navigate(['/', property_name]);
  }
}
