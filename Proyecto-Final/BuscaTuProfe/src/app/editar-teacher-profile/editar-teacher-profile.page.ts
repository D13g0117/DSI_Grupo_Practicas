import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { perfil_teacher } from '../models/perfil_teacher';

@Component({
  selector: 'app-editar-teacher-profile',
  templateUrl: './editar-teacher-profile.page.html',
  styleUrls: ['./editar-teacher-profile.page.scss'],
})
export class EditarTeacherProfilePage implements OnInit {

  profile = {} as perfil_teacher;
  constructor(
    public navCtrl: NavController,
    public router: Router ) { }

  ngOnInit() {
  }

}