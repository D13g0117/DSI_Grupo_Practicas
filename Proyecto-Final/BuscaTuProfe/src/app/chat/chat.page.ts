import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service"
import { ChatService, chat } from "../servicios/chat.service"
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular"
import { ConversacionComponent } from "../componentes/conversacion/conversacion.component"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public chatRooms : any = [];
  constructor(public authservice : AuthService, public chatservice : ChatService, private modal: ModalController) { }

  ngOnInit() {
    this.chatservice.getChatRooms().subscribe(chat =>{
      this.chatRooms = chat
    })
  }
  openChat(chat){
    this.modal.create({
      component:  ConversacionComponent,
      componentProps : {
        chat: chat
      }
    }).then( (modal)=> modal.present())

  }
  remove(item) {
    
    this.chatservice.removeTodo(item);
    
  }

}
