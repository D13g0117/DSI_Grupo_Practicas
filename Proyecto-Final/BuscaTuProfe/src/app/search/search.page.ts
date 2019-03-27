import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public authservice: AuthService) { }
  Onlogout(){
    this.authservice.logout();
    
  }
  ngOnInit() {
  }

}
