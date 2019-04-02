import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore"
import { map } from "rxjs/operators"
import { message } from '../models/message';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
export interface chat {
  description: string
  name: string
  id: string
  img: string
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private todosCollection: AngularFirestoreCollection<chat>;
  private chat: Observable<chat[]>
  constructor(private db: AngularFirestore) {
    this.todosCollection = db.collection<chat>('chatsRooms');
    this.chat = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getChatRooms() {

    return this.db.collection('chatsRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
  getChatRoom(chat_id: string) {
    return this.db.collection('chatsRooms').doc(chat_id).valueChanges()
  }
  sendMsgToFirebase(message: message, chat_id: string) {
    this.db.collection('chatsRooms').doc(chat_id).update({
      messages: firestore.FieldValue.arrayUnion(message),
    })
  }

  removeTodo(id) {
    
    return this.todosCollection.doc(id).delete();
  }
}
