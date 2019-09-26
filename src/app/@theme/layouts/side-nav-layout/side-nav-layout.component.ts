import { Component, OnInit, HostListener } from '@angular/core';
import { DataSharingService } from '../../../_services/data-sharing.service';
@Component({
  selector: 'app-side-nav-layout',
  templateUrl: './side-nav-layout.component.html',
  styleUrls: ['./side-nav-layout.component.scss']
})
export class SideNavLayoutComponent implements OnInit {

  public isNavVisible = true;
  public breadCrumb = [];
  constructor(
    private dataSharingService: DataSharingService
  ) {
    if (window.innerWidth < 960) {
      this.isNavVisible = false;
    } else {
      this.isNavVisible = true;
    }

    // const sharedData = this.dataSharingService.getMessage();
    this.dataSharingService.dataShareObj.subscribe( (message) => {
      if (message.data.breadcrumb !== undefined) {
        this.breadCrumb = message.data.breadcrumb;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 960) {
      this.isNavVisible = false;
    } else {
      this.isNavVisible = true;
    }
  }

  toggleSideNavfn($event) {
    this.isNavVisible = $event;
  }
  ngOnInit() {
  }

}
