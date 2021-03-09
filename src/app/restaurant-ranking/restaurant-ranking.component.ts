import { Component, Input, OnChanges } from '@angular/core';
import { restaurant } from '../models/restaurant';
import { map } from "rxjs/operators";
import {MatDialog, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';


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
  modalResult;

  constructor(public dialog:MatDialog) { }

  openDialog(restau) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: { ...restau },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.modalResult = result;
      console.log('this.modalResult', this.modalResult);
    });
  }

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
    ).subscribe();
  }
  sortByScore(a: any, b: any) {
    if (a.vote > b.vote) {
      return -1;
    } else if (a.vote < b.vote) {
      return 1;
    }
    return 0;
  }

  setRankLabelPluriel(restaurant) {
    const label = restaurant.vote <= 1
      ? `${restaurant.vote} vote pour ${restaurant.name} `
      : `${restaurant.vote} votes pour ${restaurant.name} `;
    return label;
  }

  onSelectionChange(event) {
    console.log(event.option.value);
  }

  openConfirmDialog(restaurant){
    this.openDialog(restaurant);

  }



}
