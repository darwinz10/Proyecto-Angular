import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estampado } from 'src/app/interface/estampado';
import { EstampadoService } from 'src/app/services/estampado.service';

/*const listEstampando: Estampado[] = [
  { nombre: 'Camiseta', color: 'Rojo', valor: 2.50},
  { nombre: 'Taza', color: 'Amarillo', valor: 3},
  { nombre: 'Gorra', color: 'Negro', valor: 3.50},
  { nombre: 'Zapatos', color: 'Blanco', valor: 6.50},
  { nombre: 'Medias', color: 'Verde', valor: 2},
  { nombre: 'Mochila', color: 'Azul', valor: 10}
];*/

@Component({
  selector: 'app-listado-estampado',
  templateUrl: './listado-estampado.component.html',
  styleUrls: ['./listado-estampado.component.css']
})

export class ListadoEstampadoComponent implements AfterViewInit  {
  displayedColumns: string[] = ['nombre', 'color', 'valor', 'acciones'];
  dataSource = new MatTableDataSource<Estampado>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _estampadoService:EstampadoService) {}

  ngOnInit(){
    this.obtenerEstampado();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerEstampado(){
    this._estampadoService.getEstampado().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  eliminarEstampado(id:number){
    this._estampadoService.deleteEstampado(id).subscribe(()=>{
      this.mensajeExito();
      this.obtenerEstampado();
    });
  }

  mensajeExito(){
    this._snackBar.open('La compra fue eliminada', '', {
      duration: 2000
    });
  }

}
