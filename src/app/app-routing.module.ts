import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto-ss/producto/producto/producto.component';
import { ProductoShopComponent } from './components/producto-ss/producto/producto-shop/producto-shop.component';
import { ProductoFormComponent } from './components/producto-ss/producto/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-ss/producto/producto-list/producto-list.component';


const routes: Routes = [
  // { path: 'producto/:id', component: ProductoComponent},
  { path: 'productos', component: ProductoShopComponent},
  { path: 'productos/lista', component: ProductoListComponent},
  { path: 'productos/guardar', component: ProductoFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'productos' },
  { path: '**', pathMatch: 'full', redirectTo: 'productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
