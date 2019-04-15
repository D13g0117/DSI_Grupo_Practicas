import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service'
import { PerfilTeacherService } from '../servicios/perfil-teacher.service';
import { ModalController } from "@ionic/angular"
import { Todo, TodoService } from '../servicios/todo.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { AngularFirestore } from '@angular/fire/firestore';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {
  searchterm: string;

  startAt = new Subject();
  endAt = new Subject();
  
  tipoBusqueda= 'name';

  clubs;
  allclubs;
 
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
  public profileRooms: any = [];
  todos: Todo[];
  constructor(public authservice: AuthService,
    public PerfilTeacherService: PerfilTeacherService,
    private modal: ModalController,
    private todoService: TodoService,
    private afs: AngularFirestore) { }

  Onlogout() {
    this.authservice.logout();

  }
  ngOnInit() {
    this.getallclubs().subscribe((clubs) => {
      this.allclubs = clubs;
    })
    this.check();
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((clubs) => {
        this.clubs = clubs;
      })
    })
    this.PerfilTeacherService.getChatRooms().subscribe(profile => {
      this.profileRooms = profile
    })
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    })
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
  check(){
    if(this.searchterm == '' || this.searchterm==null){
      
      this.clubs=null;
     
      return true;
    }
    return false;
  }
  //Funcion para que no entre en el filtrado con clubs
  comprobar(){
    if(this.searchterm == '' || this.searchterm==null){
     
      return false;
    }
    return true;
  }
  search($event) {
    
    
    let q = $event.target.value;
    
    
    if (q != '') {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }
    else {
      this.clubs = this.allclubs;
    }
  }

  firequery(start, end) {
    return this.afs.collection('perfilRooms', ref => ref.limit(4).orderBy(this.tipoBusqueda).startAt(start).endAt(end)).valueChanges();
  }

  getallclubs() {
    return this.afs.collection('perfilRooms', ref => ref.orderBy(this.tipoBusqueda)).valueChanges();
  }
  cambiarBusqueda(){
    this.tipoBusqueda='localidad';
  }
  
  busquedaAvanzada() {
    var x = document.getElementById("busquedaAvanzada");
   
    if (x.style.display == "none") {
      x.style.display = "block";
    } else if(x.style.display == ""){
      x.style.display = "block";
    }else {
      this.tipoBusqueda='name';
      x.style.display = "none";
    }
  }
  desplegable() {
    var x = document.getElementById("desplegable");
   
    if (x.style.display == "none") {
      x.style.display = "block";
    } else if(x.style.display == ""){
      x.style.display = "block";
    }else {
      this.tipoBusqueda='name';
      x.style.display = "none";
    }
  }
  firequeryArray(asignatura) {
    
    /*let datos =  this.afs.collection('perfilRooms', ref => ref.where('asignatura','array-contains',asignatura ));
    console.log(datos.get()+"Datos");*/
    
  }


}
