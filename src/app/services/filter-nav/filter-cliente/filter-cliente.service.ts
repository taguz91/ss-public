import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from '../../human-ss/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class FilterClienteService implements CanActivate {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if(!this.usuarioService.esVendedor()){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
