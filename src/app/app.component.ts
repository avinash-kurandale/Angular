import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  handleClickEvent(){                 //tjis is fuction that called in html file by click event of button
    alert("hi welcome to the website")
  }
  //data type in angular/ts check syntax also carefully
  name:string="Avinash"
  //multiple data type together
  data:string|number="hello"
  //if want to assing multiple data type then i.e any
  other:any=true


  updateName(){
    this.name="onkar"
    this.data=123
    this.other="anup"
  }

  //assingment that create button to make addition using data type and fuction
  sum(a:number ,b:number){
    console.log(a+b);
  }

  // making counter app in Angular , making button for increment decrement and reset 

  count=0
  
  handleCounter(val:string){
    if(val=='minus'){
      this.count=this.count-1
    }else if(val=='plus'){
      this.count=this.count+1
    }else{
      this.count=0
    }

  }
}
