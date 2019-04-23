import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular"
import {message} from "../../models/message"
import { ChatService } from "../../servicios/chat.service"
@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.scss'],
})
export class ConversacionComponent implements OnInit {
  public chat : any;
  public messages = [];
  public room:any;
  public msg :string;
  constructor(private navparams : NavParams,private chatService : ChatService, private modal: ModalController) { }

  ngOnInit() {
    this.chatService.getChatRoom(this.chat.id).subscribe(room =>{
      console.log(room);
      this.room = room;
    })
    this.chat = this.navparams.get('chat')
  }
  closeChat(){
    this.modal.dismiss()
  }
  sendMessage(){
    const mensaje :message = {
      content : this.msg, 
      type : 'text',
      date : new Date()
    }
    if(this.msg == undefined || this.msg == "" ){

    }else{
      this.chatService.sendMsgToFirebase(mensaje, this.chat.id);
      this.msg ="";
    }
  }
}
