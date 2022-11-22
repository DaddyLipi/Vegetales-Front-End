import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Veg } from '../Veg';
import { VegsService } from '../vegs.service';

@Component({
  selector: 'app-veg-detail',
  templateUrl: './veg-detail.component.html',
  styleUrls: ['./veg-detail.component.css']
})
export class VegDetailComponent implements OnInit{
  veg: Veg | undefined;
  constructor(
    private route: ActivatedRoute,
    private vegService: VegsService,
    private location: Location
  ){}

  ngOnInit(): void{
    this.getVeg()
  }
  getVeg(): void {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.vegService.getVegetal(id)
    .subscribe(veg =>this.veg = veg);
  }
  goBack():void{
    this.location.back();
  }
}
