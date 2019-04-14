import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Subject } from 'rxjs/Subject';
import { SearchPage } from './search.page';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs/Rx';
const routes: Routes = [
  {
    path: '',
    component: SearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchPage]
})
export class SearchPageModule implements OnInit {
  searchterm: string;

  startAt = new Subject();
  endAt = new Subject();

  clubs;
  allclubs;

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
  constructor(private afs: AngularFirestore){

  }
  ngOnInit() {
    this.getallclubs().subscribe((clubs) => {
      this.allclubs = clubs;
    })
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((clubs) => {
        this.clubs = clubs;
      })
    })
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
    return this.afs.collection('perfilRooms', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();
  }

  getallclubs() {
    return this.afs.collection('perfilRooms', ref => ref.orderBy('name')).valueChanges();
  }

}
