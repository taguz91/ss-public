import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LocalComponent } from './components/local/local.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ProductoListComponent } from './components/producto-ss/producto/producto-list/producto-list.component';
import { ClienteListComponent } from './components/human-ss/cliente/cliente-list/cliente-list.component';
import { LocalListComponent } from './components/human-ss/vendedor/local-list/local-list.component';
import { VendedorFormComponent } from './components/human-ss/vendedor/vendedor-form/vendedor-form.component';
import { LocalFormComponent } from './components/human-ss/vendedor/local-form/local-form.component';
import { ProcutoFormComponent } from './components/producto-ss/producto/procuto-form/procuto-form.component';
import { ProductoFormComponent } from './components/producto-ss/producto/producto-form/producto-form.component';
import { ClienteFormComponent } from './components/human-ss/cliente/cliente-form/cliente-form.component';

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
    VendedorFormComponent,
    LocalFormComponent,
    ProcutoFormComponent,
    ProductoFormComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
