import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const HTML = document.querySelector('#all');
    const BODY = document.querySelector('#main');
    const CTNLOGIN = document.querySelector('#ctn-login');
    HTML.setAttribute('style', 'height: 100%;');
    BODY.setAttribute('style', 'height: 100%;');

    CTNLOGIN.parentElement.parentElement.setAttribute('style', 'height: 100%;');
  }

}
