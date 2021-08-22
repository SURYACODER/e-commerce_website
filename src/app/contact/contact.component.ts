import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: any = {}
  constructor() {
    this.model = {
      title:'Mr',
      fname:'Sachin',
      lname:'Tendulkar'
    }
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.model);
  }
}
