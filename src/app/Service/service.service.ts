import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private headers = new HttpHeaders().append('Content-Type', 'application/json');
  base=environment.url
constructor(
  private http: HttpClient
) { }
  insertEntidad(body:any) {
    return this.http.post(this.base + 'entidadv1/insert-entidad', body,{headers:this.headers});
  }
  updateEntidad(body:any) {
    return this.http.put(this.base + 'entidadv1/update-entidad', body,{headers:this.headers});
  }
  listTipoDocument(){
    return this.http.get(this.base + 'tipo-documentov1/get-tipo-docuento' ,{headers:this.headers});
  }
  listTipoContribuyente(){
    return this.http.get(this.base + 'tipo-contribuyentev1/get-tipo-contribuyente',{headers:this.headers} );
  }
  listEntidad(){
    return this.http.get(this.base + 'entidadv1/get-entidad' ,{headers:this.headers});
  }
  deleteContribuyente(id:number){
    return this.http.delete(this.base + 'entidadv1/delete-entidad?idEntidad='+id,{headers:this.headers});
  }

  login(body:any) {
    return this.http.post(this.base + 'auth/login', body);
  }
}
