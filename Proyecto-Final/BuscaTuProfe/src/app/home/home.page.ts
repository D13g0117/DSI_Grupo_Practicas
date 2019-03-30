import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { logging } from 'protractor';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email: string;
  password: string;
  constructor(private authService: AuthService, public router: Router){ }
  ngOnInit(){

  }
  OnSubmitLogin(){
    this.authService.login(this.email, this.password).then(res =>{
      this.router.navigate(['/search']);
    } ).catch(err => alert('No existe el usuario datos incorrectos'))
    
  }
  OnRegister(){
      this.router.navigate(['/registrar']);
    
  }
}
