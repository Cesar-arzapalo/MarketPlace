import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campo, ObjetoTabla } from 'src/app/models/objeto-tabla.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  objetos:ObjetoTabla[]
  @Input() campos!:Campo[]
  @Output() eventFormEmit = new EventEmitter<FormArray>();
  formTabla :FormArray;
  form: FormGroup;
  index:number;
  constructor(private fb:FormBuilder) { 
    this.objetos=[]
    this.formTabla=fb.array([])
    this.form=fb.group({
      formTabla: this.formTabla
    })
    this.index=0;
  }
  
  borrarObjetoTabla(i: number) {
    this.objetos=this.objetos.filter( (o,index) => index!==i );
    this.formTabla.removeAt(i)
  }
  anyadirObjetoTabla = () => {
    console.log(this.index,"index")
    this.objetos.push(new ObjetoTabla(this.index,this.campos))
    this.formTabla.insert(this.index,this.fb.control('',[Validators.required]))
    console.log(this.formTabla)
    console.log(this.objetos)
    this.index+=1;
  }

  crearListener(){
    this.formTabla.valueChanges.subscribe((valor) => {
      this.eventFormEmit.emit(this.formTabla)
      console.log(valor);
    })

    this.formTabla.statusChanges.subscribe((status) => {
      console.log({status})
    })

    var formControlNombre=this.formTabla.at(0)
    
    if(formControlNombre){
      formControlNombre.valueChanges.subscribe(console.log);
    }
  }

  ngOnInit(): void {
    this.crearListener()
  }

}
