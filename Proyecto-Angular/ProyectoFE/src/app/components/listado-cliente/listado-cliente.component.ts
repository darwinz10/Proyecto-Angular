import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

/*const listCliente: Cliente[] = [
  { cedula: '123456789', nombre: 'Angelo', apellido: 'tomala', ciudad: 'GYE'},
  { cedula: '123456788', nombre: 'Darwin', apellido: 'zambrano', ciudad: 'CUE'},
  { cedula: '123456777', nombre: 'Jean', apellido: 'guale', ciudad: 'UIO'},
  { cedula: '123456777', nombre: 'Johanna', apellido: 'zumba', ciudad: 'STA ELENA'}
];*/

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})

export class ListadoClienteComponent implements AfterViewInit{
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'ciudad', 'opciones'];
  dataSource = new MatTableDataSource<Cliente>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _clienteService:ClienteService) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerClientes(){
    this._clienteService.getCliente().subscribe(data => {
      this.dataSource.data = data;
    }, error=> {
      alert("Ocurrio un error");
    })
  }

  eliminarCliente(id: number){
    this._clienteService.deleteCliente(id).subscribe(() => {
      this.mensajeExito();
      this.obtenerClientes();
    })
    
  }

  mensajeExito(){
    this._snackBar.open('El cliente fue eliminado', '', {
      duration: 2000
    });
  }

}
