import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { EditarAgregarEstampadoComponent } from './components/editar-agregar-estampado/editar-agregar-estampado.component';
import { ListadoEstampadoComponent } from './components/listado-estampado/listado-estampado.component';
import { VerEstampadoComponent } from './components/ver-estampado/ver-estampado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarAgregarClienteComponent } from './components/editar-agregar-cliente/editar-agregar-cliente.component';
import { ListadoClienteComponent } from './components/listado-cliente/listado-cliente.component';
import { VerClienteComponent } from './components/ver-cliente/ver-cliente.component';
import { VerCompraComponent } from './components/ver-compra/ver-compra.component';
import { ListadoCompraComponent } from './components/listado-compra/listado-compra.component';
import {MatMenuModule} from '@angular/material/menu';
import { EditarAgregarCompraComponent } from './components/editar-agregar-compra/editar-agregar-compra.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    EditarAgregarEstampadoComponent,
    ListadoEstampadoComponent,
    VerEstampadoComponent,
    EditarAgregarClienteComponent,
    ListadoClienteComponent,
    VerClienteComponent,
    VerCompraComponent,
    ListadoCompraComponent,
    EditarAgregarCompraComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
