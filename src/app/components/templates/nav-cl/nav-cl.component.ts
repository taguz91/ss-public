import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-nav-cl',
  templateUrl: './nav-cl.component.html',
  styleUrls: ['./nav-cl.component.css']
})
export class NavClComponent implements OnInit {

  constructor(private userService: UsuarioService) { }

  ngOnInit() {
    const NAV = document.querySelector('#main-nav');
    window.onscroll = function(){
      if(document.documentElement.scrollTop > 50){
        NAV.classList.add('navbar-shrink');
      } else {
        NAV.classList.remove('navbar-shrink');
      }
    }
  }

}
