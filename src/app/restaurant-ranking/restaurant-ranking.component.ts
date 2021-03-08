import { Component, Input, OnChanges } from '@angular/core';
import { restaurant } from '../models/restaurant';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-restaurant-ranking',
  templateUrl: './restaurant-ranking.component.html',
  styleUrls: ['./restaurant-ranking.component.css']
})

// étant donné que ce component ne fera jamais que rendre des données
// il n'a pas besoin de OnInit.
// on va en revanche utilise OnChange
export class RestaurantRankingComponent implements OnChanges {
  @Input()
  restaurants$: restaurant;
  sortedRestaurants: restaurant[];

  constructor() { }
  // Nouvelle interface OnChanges qui en tant qu'interface nous oblige à implémenter la méthode ngOnChange()

  ngOnChanges(changes): void {
    console.log('changes', changes);
    if (!changes.restaurants$.currentValue) {
      return;
    }
    changes.restaurants$.currentValue.pipe(
      map((restaurants: restaurant[]) => {
        const sortResult = restaurants.sort(this.sortByScore);
        this.sortedRestaurants = sortResult;
      })
    )
      .subscribe();
  }
  sortByScore(a, b) {
    if (a.votes > b.votes) {
      return -1;
    } else { return 1 }
    return 0;
  }

}
