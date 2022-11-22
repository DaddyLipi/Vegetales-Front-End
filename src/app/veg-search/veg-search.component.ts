import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Veg } from '../Veg';
import { VegsService } from '../vegs.service';
@Component({
  selector: 'app-veg-search',
  templateUrl: './veg-search.component.html',
  styleUrls: ['./veg-search.component.css']
})
export class VegSearchComponent implements OnInit {
  vegs$!: Observable<Veg[]>;
  private searchTerms = new Subject<string>();
  constructor(private vegService: VegsService){}
  search(term: string): void{
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.vegs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=> this.vegService.searchVegetales(term))
    )
  }
}
