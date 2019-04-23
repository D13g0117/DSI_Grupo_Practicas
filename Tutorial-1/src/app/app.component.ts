import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Micro-práctica 1';
  private productos:Array<[string,number]>=[['Arroz tres delicias',3.50],['Cerdoagridulce',5.50],['Ternera con bambu y setas',7.00]];
  public codProducto=-1;
  public importe:number=0.0;
  public addLinea()
 {
 var producto=this.productos[this.codProducto][0];
 var precio:number=this.productos[this.codProducto][1];
 this.lineas.push([producto,precio]);
 this.importe=this.importe+precio;
 }
 public delLinea(i)
 {
 this.importe-=this.lineas[i][1];
 this.lineas.splice(i,1);
 }

 public lineas:Array<[string,number]>=[];
   
   }
   
  