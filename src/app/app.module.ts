import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VechileEditComponent } from './vechile-edit/vechile-edit.component';
import { BuiltinDirectiveComponent } from './bultin-directive/builtin-directective.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleBookComponent } from './vehicle-book/vehicle-book.component';
import { VehicleListingComponent } from './vehicle-listing/vehicle-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    VechileEditComponent,
    BuiltinDirectiveComponent,
    VehicleAddComponent,
    VehiclesComponent,
    VehicleBookComponent,
    VehicleListingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
