import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  
  constructor(private afauth : AngularFireAuth, public router: Router) { }
  
  checked: boolean;
  email: string;
  password: string;
  ngOnInit() {
  }
  async OnRegister(){
    console.log(this.checked);
    if (this.checked == true){

      try{
        const result = await this.afauth.auth.createUserWithEmailAndPassword(this.email, this.password);
        console.log(result);
        this.router.navigate(['/new-profile']);
      }catch(e){
        
        alert(e.message);
      }
    }else{
    try{
      const result = await this.afauth.auth.createUserWithEmailAndPassword(this.email, this.password);
      console.log(result);
      this.router.navigate(['/search']);
    }catch(e){
      
      alert(e.message);
    }
  }

  }

}
