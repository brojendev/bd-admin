import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataSharingService {
  private subject = new Subject<any>();

  sendMessage(message: any) {
    this.subject.next({ text: message });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}
