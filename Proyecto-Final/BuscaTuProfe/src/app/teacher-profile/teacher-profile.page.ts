import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../servicios/todo.service';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.page.html',
  styleUrls: ['./teacher-profile.page.scss'],
})
export class TeacherProfilePage implements OnInit {

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
    private loadingController: LoadingController) { }

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


}
