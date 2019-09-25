import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataSharingService {
  private subject = new Subject<any>();
  public dataShareObj;
  constructor() {
    this.dataShareObj = this.subject.asObservable();
  }
  sendMessage(data: any) {
    this.subject.next({ data });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage() {
    this.subject.next();
    // return this.subject.asObservable();
  }
}
