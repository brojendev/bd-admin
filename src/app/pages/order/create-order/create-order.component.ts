import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../_services/data-sharing.service';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  constructor(
    private dataSharingService: DataSharingService,
  ) {
    const breadcrumb = [
      {
        name: 'Home',
        link: '/dashboard',
      },
      {
        name: 'Form',
        link: '#',
      }
    ];
    this.sendMessage(breadcrumb);
  }

  ngOnInit() {
  }

  sendMessage(data): void {
    // send message to subscribers via observable subject
    this.dataSharingService.sendMessage(data);
  }


}
