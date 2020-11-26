import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vechile-edit',
  templateUrl: './vechile-edit.component.html',
})
export class VechileEditComponent implements OnInit {

  info={
    id:'B001',
    model:'BMW X3',
    type:'SUV',
    rented: true,
    color:'#226699',
    seats:6

  }
  onSelectModel($event){
    this.info.model=$event.target.value;

  }
  onChangeType($event){
    this.info.type=$event.target.value;

  }
  onChangeColor($event){
    this.info.color=$event.target.value;
  }
  onChangeSeats($event){
    this.info.seats=$event.target.value;
  }
  onClick(){
    console.log("Model:",this.info.model);
    console.log("Type:",this.info.type);
    console.log("Color:",this.info.color);
    console.log("Seats:",this.info.seats);
  }

  constructor() { }

  ngOnInit(): void {
  }

  isType(type){
    return type == this.info.type ? true : false;
    }
  isModel(model) {
    return model == this.info.model ? true : false;
    }

}
