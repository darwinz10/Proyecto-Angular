import { Component, OnInit, numberAttribute } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-agregar-cliente',
  templateUrl: './editar-agregar-cliente.component.html',
  styleUrls: ['./editar-agregar-cliente.component.css']
})
export class EditarAgregarClienteComponent implements OnInit {
  form: FormGroup;
  id!: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder, private _clienteService:ClienteService, 
    private _snackBar: MatSnackBar, private router:Router, private aRoute:ActivatedRoute){
    this.form = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudad: ['', Validators.required]
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id != 0){
      this.operacion= 'Editar ';
      this.obtenerCliente(this.id);
    }
  }

  obtenerCliente(id:number){
    this._clienteService.getClient(id).subscribe(data => {
      this.form.patchValue({
        cedula: data.cedula,
        nombre: data.nombre,
        apellido: data.apellido,
        ciudad: data.ciudad,
      })
      console.log(data);
    })
  }

  agregarCliente(){
    const cliente:Cliente = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      ciudad: this.form.value.ciudad,
    }
    //console.log(cliente)
    this._clienteService.addCliente(cliente).subscribe(data =>{
      this.mensajeExito();
      this.router.navigate(['/listCliente']);
    })
  }

  mensajeExito(){
    this._snackBar.open('El cliente fue registrada', '', {
      duration: 2000
    });
  }

}
