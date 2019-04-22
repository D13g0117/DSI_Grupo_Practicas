import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { perfil_teacher } from '../models/perfil_teacher';
import { Todo, TodoService } from '../servicios/todo.service';
import { AngularFireStorage } from "@angular/fire/storage"
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.page.html',
  styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit {



  todo: Todo = {
    name: "",
    firstName: "",
    biografia: "",
    detalles: "",
    asignatura: "",
    pago: "",
    precio: "",
    img: "",
    localidad: ""
  }

  todoId = null;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    private todoService: TodoService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private storage:AngularFireStorage) { }
    
    uploadPercent : Observable<number>;
    urlImage : Observable<string>;

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {

    /*const loading = await this.loadingController.create({
      //content: 'Cargando perfil...'
    });
    await loading.present();*/

    this.todoService.getTodo(this.todoId).subscribe(res => {
      // loading.dismiss();
      this.todo = res;
    })
  }

  async saveTodo() {
    /*const loading = await this.loadingController.create({
      //content: 'Guardando perfil...'
    });
    await loading.present();*/


    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        // loading.dismiss();
        this.router.navigate(['/home']);
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        //loading.dismiss();
        this.router.navigate(['/home']);
      });
    }
  }
  onUpload(e){
    //console.log(e);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(()=> this.urlImage = ref.getDownloadURL())).subscribe();

  }

}
