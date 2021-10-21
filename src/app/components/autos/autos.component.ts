import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutoModel } from 'src/app/modelos/parqueadero.modelo';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: []
})
export class AutosComponent implements OnInit {

  auto: any = new AutoModel();
  //auto: any;

  constructor( private autosService: AutosService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){

    if ( form.invalid ){
      console.log('formulario no valido');
      return;
    }

    this.autosService.ingresarAuto (this.auto)
      .subscribe (resp => { 
        console.log(resp);
        this.auto = resp
      });
   }
}

  
