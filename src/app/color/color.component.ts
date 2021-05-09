import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  name= "The test";
  color = "red";
  show = false;
  bgcolor = "pink";
  bgcolor2 =  "white";
  data = [
    {
      name:"derick",
      firstName: "Gilles",
      birthDate: "2023/01/23"
    },
    {
      name:"junior",
      firstName: "yara",
      birthDate: "2025/01/28"
    },
    {
      name:"loic",
      firstName: "alain",
      birthDate: "2023/01/23"
    }
  ];

  divColor = "red";
  constructor() { }

  ngOnInit(): void {
  }

  onhidden(){
    /* if(this.show){
      this.show = false;
    }else{
      this.show = true;
    } */
    this.show = !this.show

  }

  onchange(input:any){
    console.log(input.value);
    this.bgcolor = input.value;
    input.value = "";


  }
  onchange2(input:any){

    this.bgcolor2 = input.value;
    input.value = "";


  }
}
