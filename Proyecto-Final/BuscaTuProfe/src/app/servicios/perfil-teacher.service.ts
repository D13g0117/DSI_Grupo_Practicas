import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators"

export interface perfil_teacher{
  id:string
  name: string
  firstName:string
  biografia : string
  detalles :string
  asignatura : string
  pago: string
  precio: string
  img:string
  localidad: string
}
@Injectable({
  providedIn: 'root'
})
export class PerfilTeacherService {

  constructor( private db : AngularFirestore) { }
  getChatRooms(){
    
    return this.db.collection('perfilRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as perfil_teacher;
        data.id = a.payload.doc.id;
        console.log(data);
        return data;
      })
    }))
  }
}
