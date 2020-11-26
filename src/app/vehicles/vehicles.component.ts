import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles=[
    {
        id: '1',
        model: 'BMW X3',
        type: 'SUV',
        rented: false,
        color: 'red',
        seats: 7,
        costPerKm: 5
    },
    {
        id: '2',
        model: 'Audi A4',
        type: 'Car',
        rented: false,
        color: 'white',
        seats: 5,
        costPerKm: 6.5
    },
    {
        id: '3',
        model: 'Mini cooper',
        type: 'Car',
        rented: false,
        color: 'blue',
        seats: 2,
        costPerKm: 4
    }
]

// Event Handler methods
onClick(id){

this.vehicles[id].rented=!this.vehicles[id].rented;
}


  constructor() { }

  ngOnInit(): void {
  }

}
