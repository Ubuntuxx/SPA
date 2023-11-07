import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
    private router: Router) {
    // console.log("Constructor");

  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.heroes = this._heroesService.getHeroes();

    // console.log(this.heroes);

  }

  verHeroe(indice: number) {
    this.router.navigate(['/heroe', indice])
  }
}
