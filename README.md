# WhereToEat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Additional

### ng add @angular/material

`import {MatFormFieldModule} from '@angular/material/form-field';`
`import {MatInputModule} from '@angular/material/input';`
`import {MatButtonModule} from '@angular/material/button';`

<mat-form-field> is a component used to wrap several Angular Material components and apply common Text field styles such as the underline, floating label, and hint messages.

### npm i firebase
ng add @angular/fire

ne pas oublier les imports
// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import firestoreConfig from '../../my-firestore';

et dans le tableau des imports :
`AngularFireModule.initializeApp(firestoreConfig)`


## A noter :

``
// angularfire permet de rendre l'id accessible
this.restaurants$=this.restaurantsCollection.valueChanges({idField : 'id'});
``
pour ordonner la lecture des votes
``
  readRestaurants() {
    return this.afs.collection<restaurant>('wte-restaurants', ref => ref.orderBy('vote', 'desc'));
  }
  ``
pour subordonner le style du bouton ?? la validit?? du champ de saisie
  ``
        <button mat-raised-button color="primary" type="submit" [disabled]="!suggestionForm.valid">Primary</button>    </form>
  ``

pour le template de la modale

``
    <h3 mat-dialog-title>Supprimer {{ data.name }}</h3>
    <div mat-dialog-content>
      Etes-vous bien s??r de vouloir supprimer {{ data.name }} ?
    </div>
    <br />
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Non merci</button>
      <button mat-button (click)="delete()">Oui, supprimer</button>
    </div>

    ``

## difficult?? perso

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
