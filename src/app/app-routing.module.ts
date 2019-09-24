import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto-ss/producto/producto/producto.component';
import { ProductoShopComponent } from './components/producto-ss/producto/producto-shop/producto-shop.component';
import { ProductoFormComponent } from './components/producto-ss/producto/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-ss/producto/producto-list/producto-list.component';
import { LocalFormComponent } from './components/human-ss/vendedor/local-form/local-form.component';
import { ClienteFormComponent } from './components/human-ss/cliente/cliente-form/cliente-form.component';
import { ClienteComponent } from './components/human-ss/cliente/cliente/cliente.component';


const routes: Routes = [
  { path: 'producto/:id', component: ProductoComponent},
  { path: 'productos', component: ProductoShopComponent},
  { path: 'productos/lista', component: ProductoListComponent},
  { path: 'productos/guardar', component: ProductoFormComponent },
  { path: 'productos/guardar/:idProducto', component: ProductoFormComponent },
  {path:'cliente/editar', component: ClienteFormComponent},
  {path:'cliente/guardar', component: ClienteComponent},
  // se llama al componente de formulario locales segun yo jjj para ver como va el avanze del form local
  { path: 'locales', component: LocalFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'productos' },
  // Solo para ver como va funcionando el formulario de locales
  { path: 'locales', pathMatch: 'full', redirectTo: 'locales' },
  { path: '**', pathMatch: 'full', redirectTo: 'productos' },
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
