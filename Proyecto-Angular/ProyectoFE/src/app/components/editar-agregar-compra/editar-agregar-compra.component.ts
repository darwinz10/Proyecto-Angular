import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Compra } from 'src/app/interface/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-editar-agregar-compra',
  templateUrl: './editar-agregar-compra.component.html',
  styleUrls: ['./editar-agregar-compra.component.css']
})
export class EditarAgregarCompraComponent {
  form: FormGroup

  constructor(private fb: FormBuilder, private _compraService:CompraService, 
    private _snackBar: MatSnackBar, private router:Router){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      estado: ['', Validators.required],
      cantidad: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  agregarCompra(){
    const compra:Compra = {
      usuario: this.form.value.usuario,
      estado: this.form.value.estado,
      cantidad: this.form.value.cantidad,
      direccion: this.form.value.direccion
    }
    //console.log(compra)
    this._compraService.addCompra(compra).subscribe(data =>{
      this.mensajeExito();
      this.router.navigate(['/listCompra']);
    })
  }

  mensajeExito(){
    this._snackBar.open('La compra fue registrada', '', {
      duration: 2000
    });
  }

}
