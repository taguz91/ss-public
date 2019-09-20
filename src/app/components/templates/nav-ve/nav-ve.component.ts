import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-ve',
  templateUrl: './nav-ve.component.html',
  styleUrls: ['./nav-ve.component.css']
})
export class NavVeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    const BTN = document.querySelector('#wrapper');
    if (BTN.classList.contains('toggled')) {
      BTN.classList.remove('toggled');
    } else {
      BTN.classList.add('toggled');
    }
  }
}
