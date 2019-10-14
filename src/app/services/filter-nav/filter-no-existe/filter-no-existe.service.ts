import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../../human-ss/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class FilterNoExisteService implements CanActivate {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    if(this.usuarioService.estaLogueado()){
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }

}
