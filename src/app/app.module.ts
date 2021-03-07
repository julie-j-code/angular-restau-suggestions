import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import firebaseConfig from '../../my-firestore';
import { RestaurantService } from './services/restaurant.service';


@NgModule({
  declarations: [
    AppComponent,
    SuggestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
