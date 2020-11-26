import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
  info={
    id:'',
    model:'',
    type:'',
    rented: false,
    color:'',
    seats:0

  }
  onClick(){
    console.log("Model:" ,this.info.model);
    console.log("Type:",this.info.type);
    console.log("Color:",this.info.color);
    console.log("Seats:",this.info.seats);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
