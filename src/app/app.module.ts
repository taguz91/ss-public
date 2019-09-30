import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoListComponent } from './components/producto-ss/producto/producto-list/producto-list.component';
import { ClienteListComponent } from './components/human-ss/cliente/cliente-list/cliente-list.component';
import { LocalListComponent } from './components/human-ss/vendedor/local-list/local-list.component';
import { LocalFormComponent } from './components/human-ss/vendedor/local-form/local-form.component';
import { ProductoFormComponent } from './components/producto-ss/producto/producto-form/producto-form.component';
import { ClienteFormComponent } from './components/human-ss/cliente/cliente-form/cliente-form.component';
import { ProductoComponent } from './components/producto-ss/producto/producto/producto.component';
import { VendedorComponent } from './components/human-ss/vendedor/vendedor/vendedor.component';
import { ClienteComponent } from './components/human-ss/cliente/cliente/cliente.component';
import { LocalComponent } from './components/human-ss/vendedor/local/local.component';
import { ComentarioComponent } from './components/producto-ss/comentario/comentario/comentario.component';
import { ProductoShopComponent } from './components/producto-ss/producto/producto-shop/producto-shop.component';
import { ProductoRecomComponent } from './components/producto-ss/producto/producto-recom/producto-recom.component';
import { NavClComponent } from './components/templates/nav-cl/nav-cl.component';
import { NavVeComponent } from './components/templates/nav-ve/nav-ve.component';
import { FootClComponent } from './components/templates/foot-cl/foot-cl.component';
import { FootVeComponent } from './components/templates/foot-ve/foot-ve.component';
import { TipoIdentificacionService } from './services/human-ss/tipoIdentificacion/tipo-identificacion.service';
import { ClienteService } from './services/human-ss/cliente/cliente.service';
import { CategoriaListComponent } from './components/producto-ss/categoria/categoria-list/categoria-list.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/shopshop/home/home.component';
import { CategoriasComponent } from './components/shopshop/categorias/categorias.component';
import { CategoriasShopComponent } from './components/shopshop/categorias-shop/categorias-shop.component';

import { ComentarioListComponent } from './components/producto-ss/comentario/comentario-list/comentario-list.component';
import { ComentarioUpdateComponent } from './components/producto-ss/comentario/comentario-update/comentario-update.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    VendedorComponent,
    LoginComponent,
    ClienteComponent,
    LocalComponent,
    ComentarioComponent,
    ProductoListComponent,
    ClienteListComponent,
    LocalListComponent,
    LocalFormComponent,
    ProductoFormComponent,
    ClienteFormComponent,
    ProductoShopComponent,
    ProductoRecomComponent,
    NavClComponent,
    NavVeComponent,
    FootClComponent,
    FootVeComponent,
    ComentarioUpdateComponent,
    CategoriaListComponent,
    NotFoundComponent,
    HomeComponent,
    CategoriasComponent,
    CategoriasShopComponent,
    LogoutComponent,
    ComentarioUpdateComponent,
    ComentarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule
  ],
  providers: [
    TipoIdentificacionService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
