import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  ruta=environment.ruta;

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales() {
    return this.http.get(`${this.ruta}/grafica`);
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
        .pipe(
          // delay(1500),
          map( data => {
            const labels = Object.keys( data );
            const values = Object.values( data );
            return { labels, values };
          })
        )
  }

}
