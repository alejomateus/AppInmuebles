import { Component } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent  {
  inmuebles:[];
  constructor(private inmuebelesService: InmueblesService) {
    this.inmuebelesService.getInmuebles().subscribe((data:any) => {
            this.inmuebles =data.data;
        },
        (error:any)=>{
          console.error(error);
        });
         this.inmuebelesService.createInmueble({
          city_id:"1",
          address:"1",
          transaction_type:"1",
          number_habitants:"1",
          number_baths:"1",
          number_parking:"1",
          antiquity:"1",
          active:"1"
        }).subscribe((data:any) => {
        },
        (error:any)=>{
          console.error(error);
        });
   }


}
