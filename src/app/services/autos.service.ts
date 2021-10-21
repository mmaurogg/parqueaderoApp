import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AutoModel } from '../modelos/autos.modelo';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private url = 'https://parqueadero-c2275-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient ) { }

//    ingresarAuto( auto: AutoModel ){
//      return this.http.post(`${ this.url }/autos.json`, auto)
//  }


//evitar duplicados
ingresarAuto( auto: AutoModel ){
  return this.http.post(`${ this.url }/autos.json`, auto)
    .pipe ( map ( (resp: any) => {
      auto.id = resp.name;
      return auto;
    }));
  }

sacarAuto( )

}
