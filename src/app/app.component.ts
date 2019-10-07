import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { UsuarioService } from './services/human-ss/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'SSI';

  constructor(
    private userService: UsuarioService,
    private router: Router,
    private cdRef : ChangeDetectorRef
  ) { }

  esPaginaCompleta(): boolean {
    if(this.router.url === '/login') {
      return true;
    } else {
      return false;
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

}
