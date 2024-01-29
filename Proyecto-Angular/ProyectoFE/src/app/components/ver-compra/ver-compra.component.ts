import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compra } from 'src/app/interface/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.component.html',
  styleUrls: ['./ver-compra.component.css']
})
export class VerCompraComponent implements OnInit{
  id!: number;
  compra!: Compra;

  constructor (private _compraService:CompraService, private aRoute: ActivatedRoute){
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
   }

  ngOnInit(): void {
    this.obtenerCompra();
  }

  obtenerCompra(){
    this._compraService.getPedido(this.id).subscribe(data=> {
      this.compra = data;
    })
  }

}
