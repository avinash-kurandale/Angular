import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  handleClickEvent(){                 //this is fuction that called in html file by click event of button
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

// create function for click input mouse focus and blue events

   handleEvent(event:Event){
    console.log("function called",event.type);
    console.log("value",(event.target as HTMLInputElement).value);
   }

  // <!--GET and Set Input field Value  -->

  info=""
  displayInfo=""
  email="";
  getInfo(event:Event){
    this.info=(event.target as HTMLInputElement).value
  }

  showInfo(){
    this.displayInfo = this.info;
  }

  setInfo(){
    this.info="sam"
  }

  getEmail(val:string){
    console.log(val);
    this.email=val;
  }

  setEmail(val:string){
    console.log(val);
    this.email="default@gmail.com"
  }

//  style option in angular 
// imports: [RouterOutlet,HomeComponent], here homecomponent is imported in ts file of appcomponent


//if and else in angular | hide and show circle
    isBoxVisible: boolean = true;

    showBox(){
      this.isBoxVisible=true;
    }

    hideBox(){
      this.isBoxVisible=false;
    }

// Else If in angular | contol flow statement
        color=1;
        handlecolor(val:number){
          this.color=val;
        }
        handleInput(event:Event){
          this.color = parseInt((event.target as HTMLInputElement).value);
        }

// Switch case in angular        
      
        colour = 'blue'

        handlecolour(val:string){
          this.colour=val;
        }

// For Loop in template   

         users =["Anil","Sam","Ram","Shyam","Sher"]
         students=[
          {name:'Anil', age:29, email:'anil@test.com'},
          {name:'Sam', age:29, email:'sam@test.com'},
          {name:'Ram', age:29, email:'anil@test.com'},
          {name:'Shyam', age:29, email:'anil@test.com'},
          {name:'Sher', age:29, email:'anil@test.com'},
         ]
         getName(name:string){
          console.log(name);
         }

// Signals  
        // avi=signal(10);
        // x=20;

        // constructor(){     //make it comment out when have to see concept because using many constroctor in single class are not allows 
        //   effect(()=>{
        //     console.log(this.avi());
        //   })
        // }

        // updateval(){
        //   this.avi.set(this.avi()+1)
        // } 

        // //writablesignal

        // van: WritableSignal<number | string > = signal(10);  //can be modified as below

        // updatesignal(){
        //   this.van.set("hello");
        // }

        // // computed signal
        // p=signal(10);
        // q=signal(20);
        // z=computed(()=>this.p()+this.q())

        // showVal(){
        //   console.log(this.z());
        //   this.p.set(100)
        //   console.log(this.z());
        // }

// Effect in angular

        // user= signal('anil')
        
        

        // constructor() {
        //   effect(() => {
        //     console.log(this.user()); 
        //   });
        // }

        // real time use
        user= signal('anil')
        ram = signal(0)
        displayHeading=false

        constructor(){
          effect(()=>{
            if(this.ram()==2){
              this.displayHeading=true
              setTimeout(()=>{
                this.displayHeading=false
              },2000)
            }else{
              this.displayHeading=false
            }
          })
        }

        toggleValue(){
          this.ram.set(this.ram()+1)
        }

}


  
