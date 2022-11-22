import { Component, OnInit } from '@angular/core';
import { Veg } from '../Veg';
import { VegsService } from '../vegs.service';


@Component({
  selector: 'app-vegs',
  templateUrl: './vegs.component.html',
  styleUrls: ['./vegs.component.css']
})
export class VegsComponent implements OnInit{
  vegetales: Veg[]=[];
  constructor(private vegservice: VegsService){}
  ngOnInit(): void {
    this.getVegs();
  }
  getVegs(): void{
    this.vegservice.getVegetales()
    .subscribe(vegetales => this.vegetales = vegetales);
  }
  add(name:string,cat:string,namecien:string,rate: string): void{
    let veg= {} as Veg;
    veg.nombre=name.trim();
    veg.categoria=cat.trim();
    veg.nombreCientico=namecien.trim();
    veg.ratingPersonal=+(rate.trim());
    let nom =veg.nombre.trim();
    if(!nom){return}
    this.vegservice.addVegetal(veg)
      .subscribe(veg => {
        this.vegetales.push(veg);
    });
  }
  delete(veg: Veg): void{
    this.vegetales = this.vegetales.filter(v => v !== veg);
    this.vegservice.deleteVegetal(veg.id).subscribe();
  }
}
