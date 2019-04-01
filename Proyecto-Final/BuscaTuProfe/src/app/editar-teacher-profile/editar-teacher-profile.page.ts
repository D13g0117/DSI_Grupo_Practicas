import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { perfil_teacher } from '../models/perfil_teacher';
import { Todo, TodoService } from '../servicios/todo.service';


@Component({
  selector: 'app-editar-teacher-profile',
  templateUrl: './editar-teacher-profile.page.html',
  styleUrls: ['./editar-teacher-profile.page.scss'],
})
export class EditarTeacherProfilePage implements OnInit {



  todo: Todo = {
  name:  "",
  firstName: "",
  biografia :  "",
  detalles : "",
  asignatura : "",
  pago:  "",
  precio:  "",
  img: "",
  localidad:  ""
  }

  todoId = null;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    private todoService: TodoService,
    private route: ActivatedRoute, 
    private loadingController: LoadingController) { }

  ngOnInit() {
      this.todoId = this.route.snapshot.params['id'];
      if(this.todoId){
          this.loadTodo();
      }
  }

  async loadTodo(){

    /*const loading = await this.loadingController.create({
      //content: 'Cargando perfil...'
    });
    await loading.present();*/
    
    this.todoService.getTodo(this.todoId).subscribe(res =>{
     // loading.dismiss();
      this.todo = res;
    })
  }

  async saveTodo(){
    /*const loading = await this.loadingController.create({
      //content: 'Guardando perfil...'
    });
    await loading.present();*/


    if(this.todoId){
      this.todoService.updateTodo(this.todo, this.todoId).then(() =>{
       // loading.dismiss();
        this.navCtrl.back();
      });
    }else{
      this.todoService.addTodo(this.todo).then(() =>{
        //loading.dismiss();
        this.navCtrl.back();
      });
    }
  }



}