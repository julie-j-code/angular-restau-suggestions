import { Component, OnInit } from '@angular/core';
import { Validators, NgForm, FormBuilder, RequiredValidator } from "@angular/forms";

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm:any;

  constructor(private fb:FormBuilder) { }

  // je crée une instance de suggestionForm à l'aide de FormBuilder
  // ngOnInit est appeleée chaque fois que le component est initialisé
  ngOnInit(): void {
    // formBuilder dispose d'une méthode group à laquelle il suffit de passer un objet de configuration
    this.suggestionForm=this.fb.group({
      'name':['', Validators.required],
    })


  }

  // comme on passe par un reactiveForm, suggestionForm comprendra déjà la valeur relative au name

addRestaurant(){
  console.log(this.suggestionForm.value);
  return this.suggestionForm.reset();
}

}
