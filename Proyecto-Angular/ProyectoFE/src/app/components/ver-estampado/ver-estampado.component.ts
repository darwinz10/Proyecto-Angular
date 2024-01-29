import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estampado } from 'src/app/interface/estampado';
import { EstampadoService } from 'src/app/services/estampado.service';

@Component({
  selector: 'app-ver-estampado',
  templateUrl: './ver-estampado.component.html',
  styleUrls: ['./ver-estampado.component.css']
})
export class VerEstampadoComponent implements OnInit {
  id!: number;
  estampado!: Estampado;

  constructor (private _estampadoService:EstampadoService, private aRoute:ActivatedRoute){
    this.id = Number (this.aRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void {
    this.obtenerEstampado();
  }

  obtenerEstampado(){
    this._estampadoService.getEstamps(this.id).subscribe(data=> {
      this.estampado = data;
    })
  }

}
