import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<boolean>();
  public isVisible = true;

  constructor() { }

  toggleSideNavfn() {
    if (this.isVisible) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
    this.toggleSideNav.emit(this.isVisible);
  }

  ngOnInit() {
  }

}
