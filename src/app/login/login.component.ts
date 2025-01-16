import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  formGroupParent: any = [];
  constructor(
    private service: ServiceService,
    private fb: FormBuilder,
    private router:Router
  ) {
    this.formGroupParent = this.fb.group({
      user: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }


  ngOnInit() {
    console.log("holaa")
  }


  login(){
    this.formGroupParent.markAllAsTouched();
    if(this.formGroupParent.invalid){
      return;
    }
    let body={
      'username':this.formGroupParent.controls.user.value ,
      'password' : this.formGroupParent.controls.password.value
    }
    this.service.login(body).subscribe(
      (result:any)=>{
        sessionStorage.setItem("STORAGE_TOKEN",result.token);
        this.router.navigate(["./home"]);
        console.log("result",result);
      }
    );
  }
}
