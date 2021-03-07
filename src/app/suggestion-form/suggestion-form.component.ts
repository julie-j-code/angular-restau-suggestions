import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from "@angular/forms";
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm: any;
  message:string;

  constructor(private fb: FormBuilder, private rs: RestaurantService) { }

  // je crée une instance de suggestionForm à l'aide de FormBuilder
  // ngOnInit est appeleée chaque fois que le component est initialisé
  ngOnInit(): void {
    // formBuilder dispose d'une méthode group à laquelle il suffit de passer un objet de configuration
    this.suggestionForm = this.fb.group({
      'name': ['', Validators.required]
    });
  }

  // comme on passe par un reactiveForm, suggestionForm comprendra déjà la valeur relative au name
  // addRestaurant() {
  //   console.log(this.suggestionForm.value);
  //   return this.suggestionForm.reset();
  // }

  // ne pas oublier que createRestaurant est une promise d'où le recours à async
  async addRestaurant() {
    const result = await this.rs.createRestaurant(this.suggestionForm.value.name);
    console.log(this.suggestionForm.value.name);
    // si result nous retourne bien un id, afficher message de succes
    if(result.id){
      this.message=`Restaurant ${result.id} enregistré`
    }
    return this.suggestionForm.reset();
  }

}
