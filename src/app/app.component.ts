import { Component } from '@angular/core';
import{ShapesComponent} from './shapes/shapes.component'
   
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ShapesComponent {
  title = 'drawshapes';

Rectangle(){
    
  const canvas :  any = document.getElementById("myCanvas");
  const ctx : CanvasRenderingContext2D = canvas.getContext('2d');
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.stroke();


  }
  Square(){
      
    const canvas : any = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.rect(150, 150, 150, 150);
      ctx.stroke();
      console.log(ctx);
    
}
  

Circle(){

  const canvas : any = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
console.log(ctx);
}
}