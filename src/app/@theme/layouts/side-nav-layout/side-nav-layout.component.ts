import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../_services/data-sharing.service';
@Component({
  selector: 'app-side-nav-layout',
  templateUrl: './side-nav-layout.component.html',
  styleUrls: ['./side-nav-layout.component.scss']
})
export class SideNavLayoutComponent implements OnInit {

  public isNavVisible = true;
  public breadCrumb = [
    {
      name: 'Home',
      link: '/dashboard',
    },
    {
      name: 'Form',
      link: '#'
    }
  ];
  constructor(
    private dataSharingService: DataSharingService
  ) { }

  toggleSideNavfn($event) {
    this.isNavVisible = $event;
  }
  ngOnInit() {
    const sharedData = this.dataSharingService.getMessage();
    sharedData.subscribe( message => console.log('Message', message));
  }

}
