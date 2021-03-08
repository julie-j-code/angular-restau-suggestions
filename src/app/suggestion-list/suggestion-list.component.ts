import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {

  restaurantsCollection: AngularFirestoreCollection<restaurant>;
  // convention de nommage qui veut que pour signaler un observable, on utilise $
  restaurants$: Observable<restaurant[]>;

  constructor(private rs: RestaurantService) { }

  // on se rappelle que le temps d'avoir un retour, faut utiliser de l'async

  async ngOnInit(): Promise<void> {
    this.restaurantsCollection=  await this.rs.readRestaurants();
    // angularfire permet de rendre l'id accessible
    this.restaurants$=this.restaurantsCollection.valueChanges({idField : 'id'});
  }

  vote(id){
    console.log('id', id);
  }

}
