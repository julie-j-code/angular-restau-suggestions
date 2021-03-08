import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private afs: AngularFirestore) { }

  createRestaurant(name) {
    // avec firebase, on n'a pas des tables mais des collections
    // on pointe vers le backend nouvellement  crée pour créer une nouvelle collection et lui ajouter un objet
    return this.afs.collection('wte-restaurants').add({ name: name, createdAt: Date.now(), vote: 0 });

  }

  readRestaurants() {
    return this.afs.collection<restaurant>('wte-restaurants', ref => ref.orderBy('vote', 'desc'));
  }

  voteForRestaurant(restaurant) {
    // pour l'upload, on n'interragit plus avec une collection mais avec un document
    this.afs.doc(`wte-restaurants/${restaurant.id}`).update({
      // on récupère toutes les propriétés du restaurant
      ...restaurant,
      // on écrase la valeur actuelle par la valeur augmentée
      vote: restaurant.vote + 1,

    });
  }

}
