//Componentes
import { ListadoEstampadoComponent } from './components/listado-estampado/listado-estampado.component';
import { EditarAgregarEstampadoComponent } from './components/editar-agregar-estampado/editar-agregar-estampado.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerEstampadoComponent } from './components/ver-estampado/ver-estampado.component';
import { ListadoClienteComponent } from './components/listado-cliente/listado-cliente.component';
import { EditarAgregarClienteComponent } from './components/editar-agregar-cliente/editar-agregar-cliente.component';
import { ListadoCompraComponent } from './components/listado-compra/listado-compra.component';
import { VerClienteComponent } from './components/ver-cliente/ver-cliente.component';
import { VerCompraComponent } from './components/ver-compra/ver-compra.component';
import { EditarAgregarCompraComponent } from './components/editar-agregar-compra/editar-agregar-compra.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {  path: '', redirectTo: 'verMenu', pathMatch:'full'  },
  
  {  path: 'listEstampando', component: ListadoEstampadoComponent  },
  {  path: 'agregarProducto', component: EditarAgregarEstampadoComponent  },
  {  path: 'verEstampado/:id', component: VerEstampadoComponent  },
  {  path: 'editarEstampado/:id', component: EditarAgregarEstampadoComponent  },

  {  path: 'listCliente', component: ListadoClienteComponent  },
  {  path: 'agregarCliente', component: EditarAgregarClienteComponent  },
  {  path: 'verCliente/:id', component: VerClienteComponent  },
  {  path: 'editarCliente/:id', component: EditarAgregarClienteComponent  },

  {  path: 'listCompra', component: ListadoCompraComponent  },
  {  path: 'agregarCompra', component: EditarAgregarCompraComponent  },
  {  path: 'verCompra/:id', component: VerCompraComponent  },
  {  path: 'editarCompra/:id', component: EditarAgregarCompraComponent  },

  {  path: 'verMenu', component: MenuComponent  },

  {  path: '**', redirectTo: 'verMenu', pathMatch:'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
