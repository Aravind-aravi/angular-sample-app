import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehicle-book',
  templateUrl: './vehicle-book.component.html',
  styleUrls: ['./vehicle-book.component.css']
})
export class VehicleBookComponent implements OnInit {
  @Input() vehicle: {
    id: string,
    model: string,
    type: string,
    rented: boolean,
    color: string,
    seats: number,
    costPerKm: number


  };
  @Input() admin:boolean;
  @Output() vehiclesData=new EventEmitter();
  @Output() vehicleId=new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  onClick(){
    this.vehicle.rented=!this.vehicle.rented;
    this.vehiclesData.emit(this.vehicle)
  }
  onRemove(){
    this.vehicleId.emit(this.vehicle.id);
  }

}
