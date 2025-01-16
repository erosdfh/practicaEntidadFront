import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.scss']
})
export class EntidadComponent implements OnInit{
  formGroupParent: any = [];
  listTipoContribuyentes:any = [];
  listTipoDocuments:any=[];
  listEntidad:any=[];
  idEntidad:number=0;
  isEdit:boolean=false;
  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) {
    this.formGroupParent = this.fb.group({
      tipoContribuyente: new FormControl("",[Validators.required]),
      tipoDocumento: new FormControl("",[Validators.required]),
      numDocument: new FormControl("",[Validators.required]),
      rSocial: new FormControl("",[Validators.required]),
      nomComercial: new FormControl(""),
      direccion: new FormControl(""),
      telefono: new FormControl(""),
    });
  }


  ngOnInit() {
    this.listTipoContribuyente();
    this.listTipoDocument();
    this.listaEntidad();
  }

  public limpiar(): void {
    this.formGroupParent.reset();
  }
  listTipoDocument(){
    this.service.listTipoDocument().subscribe(
      (result:any)=>{
        this.listTipoDocuments = result.data;
        this. listTipoContribuyente();
      }
    );
  }
  listTipoContribuyente(){
    this.service.listTipoContribuyente().subscribe(
      (result:any) =>{
        this.listTipoContribuyentes = result.data;
      }
    );
  }

  listaEntidad(){
    this.service.listEntidad().subscribe(
     (result:any)=>{
      console.log("data",result.data);
       result.data.forEach((element:any) => {
         this.listEntidad.push(
           { idEntidad:element.id_entidad,
             tipoPersona:element.tipoContribuyente.nombre,
             tipoDocumento:element.tipoDocumento.nombre,
             detDocumento:element.tipoDocumento.descripcion,
             codDocumento:element.tipoDocumento.codigo,
             nroDocumento:element.nro_documento,
             rSocial:element.razon_social,
             nomComercial:element.nombre_comercial,
             direccion:element.direccion,
             telefono:element.telefono,
             idTipoDocumento:element.tipoDocumento.id_tipo_documento,
             idTipoContribuyente:element.tipoContribuyente.id_tipo_contribuyente
           }
         );
       });
       console.log("result.data",this.listEntidad);
     }
     
    );
   }

   registrarEntidad(){
    this.formGroupParent.markAllAsTouched();
    if(this.formGroupParent.invalid){
      return;
    }
    let body={
      'id_tipo_documento':this.formGroupParent.controls.tipoDocumento.value ,
      'nro_documento' : this.formGroupParent.controls.numDocument.value, 
      'razon_social' : this.formGroupParent.controls.rSocial.value,
      'nombre_comercial':this.formGroupParent.controls.nomComercial.value,
      'id_tipo_contribuyente': this.formGroupParent.controls.tipoContribuyente.value, 
      'direccion': this.formGroupParent.controls.direccion.value,
      'telefono':this.formGroupParent.controls.telefono.value,
      'estado':1
    }
    console.log("body",body)
    this.service.insertEntidad(body).subscribe(
      (result:any)=>{
        if(result.data==1){
          Swal.fire(
            'Registrado',
            'La entidad ha sido registrada correctamente.',
            'success'
          );
          this.limpiar();
          this.listEntidad = [];
          this.listaEntidad();
        }
      }
    );
  }

  eliminarEntidad(e:any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la entidad permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteContribuyente(e.idEntidad).subscribe(
          (result: any) => {
            if (result.data === 1) {
              Swal.fire(
                'Eliminado',
                'La entidad ha sido eliminada correctamente.',
                'success'
              );
              this.listEntidad = [];
              this.listaEntidad();
            }
          },
          (error: any) => {
            console.error('Error al eliminar la entidad:', error);
            Swal.fire(
              'Error',
              'No se pudo eliminar la entidad. Por favor, inténtalo de nuevo.',
              'error'
            );
          }
        );
      }
    });
    
  }
  editarCampos(e:any){
    this.idEntidad= e.idEntidad;
    this.formGroupParent.controls.tipoDocumento.setValue(e.idTipoDocumento);
    this.formGroupParent.controls.numDocument.setValue(e.nroDocumento);
    this.formGroupParent.controls.rSocial.setValue(e.rSocial);
    this.formGroupParent.controls.nomComercial.setValue(e.nomComercial);
    this.formGroupParent.controls.tipoContribuyente.setValue(e.idTipoContribuyente);
    this.formGroupParent.controls.direccion.setValue(e.direccion);
    this.formGroupParent.controls.telefono.setValue(e.telefono);
    this.isEdit=true;
  }
  actualizarEntidad(){
    this.formGroupParent.markAllAsTouched();
    if(this.formGroupParent.invalid){
      return;
    }
    let body={
      'id':this.idEntidad,
      'id_tipo_documento':this.formGroupParent.controls.tipoDocumento.value ,
      'nro_documento' : this.formGroupParent.controls.numDocument.value, 
      'razon_social' : this.formGroupParent.controls.rSocial.value,
      'nombre_comercial':this.formGroupParent.controls.nomComercial.value,
      'id_tipo_contribuyente': this.formGroupParent.controls.tipoContribuyente.value, 
      'direccion': this.formGroupParent.controls.direccion.value,
      'telefono':this.formGroupParent.controls.telefono.value,
      'estado':1
    }
    this.service.updateEntidad(body).subscribe(
      (result:any)=>{
        if(result.data==1){
          this.isEdit=false;
          this.limpiar();
          Swal.fire(
            'Modificado',
            'La entidad ha sido modificada correctamente.',
            'success'
          );
          this.listEntidad = [];
          this.listaEntidad();
        }
      }
    );
  }
}
