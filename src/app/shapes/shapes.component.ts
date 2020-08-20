import { Component, OnInit ,ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements  AfterViewInit {
  
    @ViewChild('myCanvas')
    myCanvas: ElementRef<HTMLCanvasElement>;
  
    public context: CanvasRenderingContext2D;
  
    ngAfterViewInit(): void {
    }
  

  constructor() { }

  ngOnInit(): void {}

 
  

 


  }
