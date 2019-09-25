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
        name: 'Form',
        link: '#',
      }
    ]};
    // send message to subscribers via observable subject
    this.dataSharingService.sendMessage(breadcrumb);
  }


}
