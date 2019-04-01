import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service'
import { PerfilTeacherService } from '../servicios/perfil-teacher.service';
import { ModalController } from "@ionic/angular"
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public profileRooms : any = [];
  constructor(public authservice : AuthService, public PerfilTeacherService : PerfilTeacherService, private modal: ModalController) { }

  Onlogout(){
    this.authservice.logout();
    
  }
  ngOnInit() {
    this.PerfilTeacherService.getChatRooms().subscribe(profile =>{
     
      this.profileRooms = profile
    })
  }

}
