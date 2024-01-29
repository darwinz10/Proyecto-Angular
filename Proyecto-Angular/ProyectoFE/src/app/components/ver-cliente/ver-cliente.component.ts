import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit{
  id!: number;
  cliente!: Cliente;

  constructor(private _clienteService:ClienteService, private aRoute: ActivatedRoute){
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
   }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente(){
    this._clienteService.getClient(this.id).subscribe(data => {
      this.cliente = data;
    })
  }

}
