import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../_services/data-sharing.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

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
