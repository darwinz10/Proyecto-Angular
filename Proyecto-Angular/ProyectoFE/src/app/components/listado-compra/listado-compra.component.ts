import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Compra } from 'src/app/interface/compra';
import { CompraService } from 'src/app/services/compra.service';

/*const listCompra: Compra[] = [
  {usuario: 'Angelo', estado: 'En transito', direccion: 'GYE', cantidad: 5},
  {usuario: 'Jean', estado: 'Devolucion', direccion: 'CUE', cantidad: 2},
  {usuario: 'Paul', estado: 'Devolucion', direccion: 'UIO', cantidad: 4},
  {usuario: 'Jose', estado: 'En transito', direccion: 'GYE', cantidad: 1},
  {usuario: 'Milena', estado: 'En transito', direccion: 'CUE', cantidad: 1},
  {usuario: 'Pamela', estado: 'Arribo a Ecuador', direccion: 'UIO', cantidad: 7},
];*/

@Component({
  selector: 'app-listado-compra',
  templateUrl: './listado-compra.component.html',
  styleUrls: ['./listado-compra.component.css']
})

export class ListadoCompraComponent implements AfterViewInit{
  displayedColumns: string[] = ['usuario','estado','direccion','cantidad', 'opciones'];
  dataSource = new MatTableDataSource<Compra>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _compraService:CompraService) {}
  
  ngOnInit():void{
    this.obtenerCompras();
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

  obtenerCompras(){
    this._compraService.getCompra().subscribe(data => {
      this.dataSource.data = data;
    }, error=> {
      alert("Ocurrio un error");
    })
  }

  eliminarCompra(id: number){
    this._compraService.deleteCompra(id).subscribe(()=>{
      this.mensajeExito();
      this.obtenerCompras();
    });
  }

  mensajeExito(){
    this._snackBar.open('La compra fue eliminada', '', {
      duration: 2000
    });
  }

}
