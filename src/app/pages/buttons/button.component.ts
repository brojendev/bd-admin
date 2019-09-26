import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../_services/data-sharing.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(
    private dataSharingService: DataSharingService,
  ) {
    
    this.sendMessage();
  }

  ngOnInit() {
    this.sendMessage();
  }

  sendMessage(): void {
    const breadcrumb = { breadcrumb: [
      {
        name: 'Home',
        link: '/dashboard',
      },
      {
        name: 'Button',
        link: '#',
      }
    ]};
    // send message to subscribers via observable subject
    this.dataSharingService.sendMessage(breadcrumb);
  }
}
