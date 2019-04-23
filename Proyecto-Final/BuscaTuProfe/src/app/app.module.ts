import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { firebaseConfig } from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/storage"
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule , FirestoreSettingsToken } from "@angular/fire/firestore";
import { ConversacionComponent } from "./componentes/conversacion/conversacion.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AppComponent, ConversacionComponent],
  entryComponents: [ ConversacionComponent ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig), 
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
