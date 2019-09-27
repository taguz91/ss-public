import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto-ss/producto/producto/producto.component';
import { ProductoShopComponent } from './components/producto-ss/producto/producto-shop/producto-shop.component';
import { ProductoFormComponent } from './components/producto-ss/producto/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-ss/producto/producto-list/producto-list.component';
import { LocalFormComponent } from './components/human-ss/vendedor/local-form/local-form.component';
import { ClienteFormComponent } from './components/human-ss/cliente/cliente-form/cliente-form.component';
import { ClienteComponent } from './components/human-ss/cliente/cliente/cliente.component';
import { FilterVendedorService } from './services/filter-nav/filter-vendedor/filter-vendedor.service';
import { FilterClienteService } from './services/filter-nav/filter-cliente/filter-cliente.service';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'producto/:id', 
    component: ProductoComponent,
    outlet: 'ctn-cl'
  },
  { 
    path: 'productos', 
    component: ProductoShopComponent,
    outlet: 'ctn-cl'
  },
  { 
    path: 'productos/lista', 
    component: ProductoListComponent,
    canActivate: [FilterVendedorService],
    outlet: 'ctn-ve'
  },
  { 
    path: 'productos/guardar', 
    component: ProductoFormComponent,
    canActivate: [FilterVendedorService],
    outlet: 'ctn-ve'
  },
  { 
    path: 'productos/guardar/:idProducto', 
    component: ProductoFormComponent,
    canActivate: [FilterVendedorService],
    outlet: 'ctn-ve'
  },
  { 
    path: 'cliente/editar', 
    component: ClienteFormComponent,
    canActivate: [FilterClienteService],
  },
  { 
    path: 'cliente/guardar', 
    component: ClienteFormComponent
  },
  // se llama al componente de formulario locales segun yo jjj para ver como va el avanze del form local
  { 
    path: 'locales', 
    component: LocalFormComponent,
    canActivate: [FilterVendedorService],
    outlet: 'ctn-ve'
  },
  { 
    path: '',  
    component: ProductoShopComponent,
    outlet: 'ctn-cl'
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    redirectTo: 'productos' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
