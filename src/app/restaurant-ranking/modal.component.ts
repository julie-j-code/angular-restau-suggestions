import { Component, Inject } from "@angular/core";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantService } from "../services/restaurant.service";


@Component({
  selector: 'app-modal-ranking',
  template: `
    <h3 mat-dialog-title>Supprimer {{ data.name }}</h3>
    <div mat-dialog-content>
      Etes-vous bien sûr de vouloir supprimer {{ data.name }} ?
    </div>
    <br />
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Non merci</button>
      <button mat-button (click)="delete()" cdkFocusInitial>Oui, supprimer</button>
    </div>
  `,
})

export class ModalComponent {
  constructor(
    private rs: RestaurantService, public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data
  ) { }

  onNoClick() {
    this.dialogRef.close('nope');
  }

  delete() {
    // TO DO delete restaurant
    this.dialogRef.close('deleted soon');
    console.log('restau from data', this.data);
  }



}
