import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campo } from 'src/app/models/objeto-tabla.model';
import Swal from 'sweetalert2'
import { ProductoService } from '../../../services/producto.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  camposImagenes: Campo[]
  camposCaracteristica: Campo[]
  productosForm: FormGroup

  constructor(private fb:FormBuilder, private productoService:ProductoService) { 
    this.camposImagenes=[new Campo("imagen","text")]
    this.camposCaracteristica=[new Campo("caracteristica","text")]
    // this.productosForm=fb.group({});
    this.productosForm=fb.group({
      nombre: ['',[Validators.required,Validators.maxLength(30)]],
      descripcion:['',[Validators.required,Validators.maxLength(512)]],
      valorizacion:[0,[Validators.required,Validators.min(0),Validators.max(10)]],
      visitas:[0,[Validators.required,Validators.min(0)]],
      precio:[0,[Validators.required,Validators.min(0)]],
      stock:[0,[Validators.required,Validators.min(0)]],
      medida:['',[Validators.required,Validators.minLength(0),Validators.maxLength(30)]],
      unidad:['',[Validators.required,Validators.minLength(0),Validators.maxLength(30)]],
      caracteristicas:fb.array([]),
      imagenes:fb.array([])
    });
  }

  
  
  ngOnInit(): void {
    this.crearListener();
  }
  
  crearListener(){
    this.productosForm.valueChanges.subscribe((valor) => {
      console.log(valor);
    })

    this.productosForm.statusChanges.subscribe((status) => {
      console.log({status})
    })

    var formControlNombre=this.productosForm.get('nombre')
    
    if(formControlNombre){
      formControlNombre.valueChanges.subscribe(console.log);
    }
  }

  actualizarCaracteristicas(form:FormArray){
    this.productosForm.setControl("caracteristicas",form)
  }
  actualizarImagenes(form:FormArray){
    this.productosForm.setControl("imagenes",form)
  }

  anyadirProducto(){
    if(this.productosForm.invalid){
      Swal.fire({
        title:'Datos incorrectos y/o incompletos',
        icon:'error'
      })
      return;
    }
    Swal.fire({
      title:'Espere por favor...'
    })
    Swal.showLoading ()
    this.productoService.getProductos().subscribe(resp =>{
      console.log(resp)
    })
  }
}
