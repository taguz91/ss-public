import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto-ss/producto/producto/producto.component';
import { ProductoShopComponent } from './components/producto-ss/producto/producto-shop/producto-shop.component';
import { ProductoFormComponent } from './components/producto-ss/producto/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-ss/producto/producto-list/producto-list.component';
import { LocalFormComponent } from './components/human-ss/vendedor/local-form/local-form.component';
import { ClienteFormComponent } from './components/human-ss/cliente/cliente-form/cliente-form.component';
import { FilterVendedorService } from './services/filter-nav/filter-vendedor/filter-vendedor.service';
import { FilterClienteService } from './services/filter-nav/filter-cliente/filter-cliente.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClienteComponent } from './components/human-ss/cliente/cliente/cliente.component';
import { CategoriaListComponent } from './components/producto-ss/categoria/categoria-list/categoria-list.component';


const routes: Routes = [
  { path: 'producto/:id', component: ProductoComponent},
  { path: 'productos', component: ProductoShopComponent},
  { path: 'productos/lista', component: ProductoListComponent},
  { path: 'productos/guardar', component: ProductoFormComponent },
  { path: 'productos/guardar/:idProducto', component: ProductoFormComponent },
  { path: 'categorias/asignar/:idProducto', component: CategoriaListComponent },
  {path:'cliente/editar', component: ClienteFormComponent},
  {path:'cliente/guardar', component: ClienteComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  { 
    path: 'producto/:id', 
    component: ProductoComponent,
    outlet: 'cli'
  },
  { 
    path: 'productos', 
    component: ProductoShopComponent,
    outlet: 'cli'
  },
  { 
    path: 'productos/lista', 
    component: ProductoListComponent,
    canActivate: [FilterVendedorService],
    outlet: 'ven'
  },
  { 
    path: 'productos/guardar', 
    component: ProductoFormComponent,
    canActivate: [FilterVendedorService],
    outlet: 'ven'
  },
  { 
    path: 'productos/guardar/:idProducto', 
    component: ProductoFormComponent,
    canActivate: [FilterVendedorService],
    outlet: 'ven'
  },
  { 
    path: 'cliente', 
    component: ClienteComponent,
    outlet: 'cli'
  },
  { 
    path: 'cliente/editar', 
    component: ClienteFormComponent,
    canActivate: [FilterClienteService],
    outlet: 'cli'
  },
  { 
    path: 'cliente/guardar', 
    component: ClienteFormComponent,
    outlet: 'cli'
  },
  // se llama al componente de formulario locales segun yo jjj para ver como va el avanze del form local
  { 
    path: 'locales', 
    component: LocalFormComponent,
    canActivate: [FilterVendedorService],
    outlet: 'ven'
  },
  { 
    path: '',  
    component: ProductoShopComponent,
    outlet: 'cli'
  },
  { 
    path: '**', 
    component: NotFoundComponent
  },
  { 
    path: '**', 
    component: NotFoundComponent,
    outlet: 'cli'
  },
  { 
    path: '**', 
    component: NotFoundComponent,
    outlet: 'ven'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
