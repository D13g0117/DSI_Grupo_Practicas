import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service'
import { PerfilTeacherService } from '../servicios/perfil-teacher.service';
import { ModalController } from "@ionic/angular"
import { Todo, TodoService } from '../servicios/todo.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public profileRooms: any = [];
  todos: Todo[];
  constructor(public authservice: AuthService,
    public PerfilTeacherService: PerfilTeacherService,
    private modal: ModalController,
    private todoService: TodoService) { }

  Onlogout() {
    this.authservice.logout();

  }
  ngOnInit() {
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

}
