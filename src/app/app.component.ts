import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  fontSize: number = 4;
  myDiv;

  constructor(private elementRef:ElementRef) {}

  ngAfterViewInit() {
    this.myDiv = this.elementRef.nativeElement.querySelector('.my-div');
  } 
  

  view() {
    this.fontSize++;
    this.myDiv.style.fontSize= `${this.fontSize}px`;
  }

  hide() {
      this.fontSize--;
    this.myDiv.style.fontSize= `${this.fontSize}px`;
  }

  changeColor() {
    this.myDiv.style.color = "green"
  }

}
