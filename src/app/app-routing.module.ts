import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirLineBookingComponent } from './AirLines/Components/air-line-booking/air-line-booking.component';
import { AirLineMainBodyComponent } from './AirLines/Components/air-line-main-body/air-line-main-body.component';
import { AirLineHeaderComponent } from './AirLines/Components/air-line-header/air-line-header.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { CharterBookingComponent } from './AirLines/Components/charter-booking/charter-booking.component';

const routes: Routes = [{
    path: '',
    component: MainHomeComponent
  },
{
  path: 'airline',
  component: AirLineHeaderComponent,
  children:[
    {path:'',component:AirLineMainBodyComponent},
    {path:'bookingAir',component:AirLineBookingComponent},
    {path:'bookingCharter',component:CharterBookingComponent}
     ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
