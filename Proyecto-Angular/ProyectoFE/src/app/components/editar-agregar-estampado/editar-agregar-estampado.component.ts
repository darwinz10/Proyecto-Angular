import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Estampado } from 'src/app/interface/estampado';
import { EstampadoService } from 'src/app/services/estampado.service';

@Component({
  selector: 'app-editar-agregar-estampado',
  templateUrl: './editar-agregar-estampado.component.html',
  styleUrls: ['./editar-agregar-estampado.component.css']
})
export class EditarAgregarEstampadoComponent implements OnInit{
  form: FormGroup;
  id!: number;
  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder, private _estampadoService:EstampadoService,
     private _snackBar: MatSnackBar, private router:Router, private aRoute:ActivatedRoute){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      color: ['', Validators.required],
      valor: ['', Validators.required]
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    //console.log(this.id);
  }

  ngOnInit(): void {
    if(this.id!= 0){
      this.operacion = 'Editar'
    }
  }

  agregarProducto(){
    const estampado: Estampado = {
      nombre: this.form.value.nombre,
      color: this.form.value.color,
      valor: this.form.value.valor,
    }
    //console.log(estampado)
    this._estampadoService.addEstampado(estampado).subscribe(data =>{
      this.mensajeExito();
      this.router.navigate(['/listEstampando']);
    })
  }

  mensajeExito(){
    this._snackBar.open('El producto fue registrado', '', {
      duration: 2000
    });
  }

}
