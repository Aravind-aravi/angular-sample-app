import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-listing',
  templateUrl: './vehicle-listing.component.html',
  styleUrls: ['./vehicle-listing.component.css']
})
export class VehicleListingComponent implements OnInit {
  admin=[]
  vehicles = [
    {
        id: '1',
        model: 'BMW X3',
        type: 'SUV',
        rented: true,
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
handleBooking(vehicle){
  console.log('Data id:'+ vehicle.id + 'rented: ' +vehicle.rented);
  console.log('Data id:' + this.vehicles[this.findIndex(vehicle.id)].id
  +'rented:'+this.vehicles[this.findIndex(vehicle.id)].rented ,
  this.vehicles[this.findIndex(vehicle.id)].model);

  // the data will be of format {id:'',rented:boolean}
  // update the respective item in array
}
removeVehicle(id){
  let index=this.vehicles.findIndex((vehicle)=> vehicle.id === id);
  console.log(index);
  this.vehicles.splice(index,1);
}

findIndex(id){
  for(var i=0;i<this.vehicles.length;i++){
    if(this.vehicles[i].id === id){
      return i;
    }
  }

}



  constructor() { }

  ngOnInit(): void {
  }

}
