import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-nav',
  templateUrl: './breadcrumb-nav.component.html',
  styleUrls: ['./breadcrumb-nav.component.scss']
})
export class BreadcrumbNavComponent implements OnInit {

  @Input() navData = [];

  constructor() {
    console.log('navData', this.navData.length);
  }

  ngOnInit() {
    console.log('navData', this.navData);
  }

}
